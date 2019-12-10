## Overview

The (@kubernetes-client/javascript)[https://github.com/kubernetes-client/javascript] package is generated only for the Core API. This package will download, configure, and regenerate the upstream package for the cluster specified by `KUBECONFIG`. It will also overwrite name/description/version values in the resulting package.json

## Usage

1. `KONVOYSEMVER=xxx KUBECONFIG=xxx ./generate.sh` refreshes the client generated in `konvoy-client-node`. `konvoy-client-node` is versioned to a version of konvoy, so `KONVOYSEMVER` should be in the semantic version form: `1.3.0-beta5`

2. Within the package, run `npm run format` to prettier all generated files

3. You may need to remove an import to satisfy tsc. Not sure where this import comes from because it's not used.

4. `./build-package`

5. `./push-package`

## System Dependencies

`jq`
