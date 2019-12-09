#!/bin/bash

set -ex

TEMP_FOLDER=$(mktemp -d tmp-kubernetes-client-javascript.XXXXX)
TARGET_FOLDER="package"

trap "rm -rf ${TEMP_FOLDER}" EXIT SIGINT
trap ">>> An error occurred. You may need to delete temp dir\n\n${TEMP_FOLDER}" ERR

if [[ -z $KUBECONFIG ]]; then
  echo "No KUBECONFIG specified"
  exit 1
fi

if [[ -z $KONVOYSEMVER ]]; then
  echo "No KONVOYSEMVER specified"
  exit 1
fi

while true
do
 read -r -p ">>> WARNING This script will extract an OpenAPI spec from the KUBECONFIG env cluster.
 
 Cluster:
 $KUBECONFIG

 Continue? [y/n] " input
 
 case $input in
     [yY][eE][sS]|[yY])
 echo "Yes"
 break
 ;;
     [nN][oO]|[nN])
 echo "No"
 exit 1
        ;;
     *)
 echo "Invalid input..."
 ;;
 esac
done

echo ">>> Cloning kubernetes-client/javascript repo"

git clone --recursive https://github.com/kubernetes-client/javascript.git "${TEMP_FOLDER}"

echo ">>> Modifying settings"

echo "export OPENAPI_SKIP_FETCH_SPEC=1" >> "${TEMP_FOLDER}/settings"

echo ">>> Extracting default service account token"

APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")
SECRET_NAME=$(kubectl get secrets | grep ^default | cut -f1 -d ' ')
TOKEN=$(kubectl describe secret $SECRET_NAME | grep -E '^token' | cut -f2 -d':' | tr -d " ")

echo ">>> Fetching Open API spec"
curl -k -H "Authorization: Bearer $TOKEN" $APISERVER/openapi/v2 > "$TEMP_FOLDER/src/gen/swagger.json.unprocessed"

cd $TEMP_FOLDER

echo ">>> Generating client... This may take a few minutes"
npm run generate

echo ">>> Copying client source"
mkdir -p "../$TARGET_FOLDER"
cp -r * "../$TARGET_FOLDER/"
cd ../$TARGET_FOLDER

echo ">>> Modifying package.json"
jq '.noexist = "konvoy-client-node"' package.json

jq '.name = "konvoy-client-node"' package.json | \
    jq ".version = \"$KONVOYSEMVER\"" | \
    jq ".description = \"NodeJS client for konvoy kubernetes\"" | \
    jq ".repository.url = \"https://github.com/brandonc/konvoy-client-node.git\"" \
    > package.json.tmp

mv package.json.tmp package.json

echo ">>> Done! \
You can now run package/build-package.sh and package/push-package.sh"