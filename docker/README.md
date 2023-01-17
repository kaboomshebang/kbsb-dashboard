# Readme

`Dockerfile`s to build Docker images only usable as development containers.

> These image blueprints do not `COPY` project src files and do not execute `CMD`s.

```sh
docker build -t kbsb-dashboard-python .
docker build -t kbsb-dashboard-node .
```

## Run the containers

```sh
# node
docker run -d -it --entrypoint /bin/sh --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
docker run -d -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node

# python
docker run -d -it --entrypoint /bin/bash --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
docker run -d -it --entrypoint /bin/bash -p 8000:8000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
```

-----------------------------------------------------------

## For deployment containers

Check the `Dockerfile`s build images in the `/api` and `/app` directories.

-----------------------------------------------------------

## Manually run the containers

- [ ] Todo: Add `docker-compose.yml`
- [ ] Todo: update these instructions

```yaml
services:
  frontend:
    image: kbsb-dashboard-node
  backend:
    image: kbsb-dashboard-python
```

### Node container

```sh
# with docker
docker run -it --entrypoint /bin/sh --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
# with ports mounted
docker run -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
# detached, with ports mounted
docker run -d -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-node
```

### Python container

```sh
# run with docker
docker run -it --entrypoint /bin/bash --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
# with ports mounted
docker run -it --entrypoint /bin/bash -p 8000:8000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
# detached, with ports mounted
docker run -d -it --entrypoint /bin/bash -p 8000:8000 --mount type=bind,source="$(pwd)",target=/src kbsb-dashboard-python
```
