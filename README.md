# kbsb-dashboard

A data dashboard built with React, Django and ApexCharts

---------------------------------------------------------

## Set up a NodeJS Docker container

```sh
# with podman
podman run -d -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src node:18-alpine
podman ps
podman attach <CONTAINER_NAME>
```

### node:18-alpine

```sh
# add Alpine make package
apk add make

# aliasses for Alpine
alias ll="ls -la" && alias l="ls -la"
```

---------------------------------------------------------

## Set up a Python Docker container

```sh
# with podman
podman run -d -it --entrypoint /bin/bash -p 5000:5000 --mount type=bind,source="$(pwd)",target=/src python:3.11.1-slim-bullseye
podman ps
podman attach <CONTAINER_NAME>
```

### python:3.11.1-slim-bullseye

```sh
# add Ubuntu packages
apt update
apt install -y make curl unzip
```
