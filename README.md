# kbsb-dashboard

A data dashboard demo built with React, Django and ApexCharts. 

URLs:
- [Frontend](https://kbsb-dashboard.vercel.app/)
- [API](https://kbsb-dashboard.fly.dev/api/eurodollars/)

---------------------------------------------------------

## Build instructions with Make

> Note: you need Docker and Make as host OS dependencies

```sh
# build the Docker images from the Dockerfile with Make
make image
# run dev container
make run
make django # from inside container /src
make nextjs # from inside container /src
```

- [ ] Todo: verify the build instructions

## Deployment containers

- [ ] Todo: fix the deployment setup

```sh
# run Python deployment container
make python8000

# run Node deployment container
make node3000
```
