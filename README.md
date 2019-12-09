## Overview

The @kubernetes-client/javascript package is generated only for the Core API. This package will download, configure, and regenerate the @kubernetes-client/javascript package for the cluster specified by KUBECONFIG

## Usage

`KONVOYSEMVER=xxx KUBECONFIG=xxx ./generate.sh` refreshes the client generated in konvoy-client-node

konvoy-client-node is versioned to a version of konvoy, so KONVOYSEMVER should be in the semantic version form: "1.3.0-beta5"
