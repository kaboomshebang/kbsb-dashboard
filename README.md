# kbsb-dashboard

A data dashboard demo built with React, Django and ApexCharts.

---------------------------------------------------------

## Build instructions with Make

> Note: you need Docker and Podman as host OS dependencies

```sh
# build the Docker images from the Dockerfile with Make
make images

# run Python development containers
make python5000
make django # from container

# run Node dev container
make node3000
make nextjs # from container

# run containers with port mapping
make node
make python
```

---------------------------------------------------------

## Manually run the containers

- [ ] Todo: Add `docker-compose.yml`

```yaml
services:
  frontend:
    image: kbsb-dashboard-node
  backend:
    image: kbsb-dashboard-python
```

### Node container

```sh
# with podman
podman run -it --entrypoint /bin/sh --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
# with ports mounted
podman run -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
# detached, with ports mounted
podman run -d -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
```

### Python container

```sh
# run with podman
podman run -it --entrypoint /bin/bash --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
# with ports mounted
podman run -it --entrypoint /bin/bash -p 5000:5000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
# detached, with ports mounted
podman run -d -it --entrypoint /bin/bash -p 5000:5000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
```
