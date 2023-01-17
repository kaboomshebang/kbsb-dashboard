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
