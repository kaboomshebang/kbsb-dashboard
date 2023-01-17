###############################################
# MAKE CONFIG
###############################################

# https://www.linuxzen.com/notes/notes/20220822112621-your_makefiles_are_wrong/
# https://tech.davis-hansson.com/p/make/

# Set the shell (sh/bash)
# SHELL := bash
# SHELL := sh
#####! for this Makefile do not set SHELL
#####! (because Alpine uses /bin/sh and Debain uses /bin/bash)

# bin/bash flags
# .SHELLFLAGS := -eu -o pipefail -c

# bin/sh flags
.SHELLFLAGS := -eu -c

# SHELLFLAGS:
# set -e If a command fails, the whole script will exit.
# set -u Treat unset variables as an error, and immediately exit.

# https://www.gnu.org/software/make/manual/html_node/One-Shell.html 
.ONESHELL:

# Delete it's target file if a Make rule fails.
.DELETE_ON_ERROR:

MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

# Always use GNU Make.
ifeq ($(origin .RECIPEPREFIX), undefined)
  $(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif

# Use '>' to prefix instead of tab.
.RECIPEPREFIX = >



###############################################
# TASKS
###############################################

# Start NextJS dev server
nextjs:
> cd app
> npm install
> npm run dev

# Start Django dev server
django:
> cd api
> poetry install
> poetry run python datadash/manage.py runserver 0.0.0.0:8000



###############################################
# BUILD DOCKER IMAGES
###############################################

# build Docker images
images:
> cd docker/backend && docker build -t kbsb-dashboard-python .
> cd ../..
> echo "\nPython image created\n"
> cd docker/frontend && docker build -t kbsb-dashboard-node .
> echo "\nNode image created\n"

image:
> cd docker && docker build -t kbsb-dashboard -f Dockerfile.dev .



###############################################
# RUN DOCKER CONTAINERs (DEV)
###############################################

################# note: in Makefiles escape shell variables with a double $ character

run:
> docker run -it --name kbsb-dashboard -p 8000:8000 -p 3000:3000 --mount type=bind,source="$$(pwd)",target=/src kbsb-dashboard

shell:
> docker exec -it kbsb-dashboard /bin/bash


###############################################
# RUN DOCKER CONTAINERs (PRODUCTION)
###############################################

############### todo: convert to Docker Compose

# run and attach Node containers
node:
> docker run -it --entrypoint /bin/sh --mount type=bind,source="$$(pwd)",target=/src kbsb-dashboard-node
# with ports
node3000:
> docker run -it --entrypoint /bin/sh -p 3000:3000 --mount type=bind,source="$$(pwd)",target=/src kbsb-dashboard-node

# run and attach Python containers
python:
> docker run -it --entrypoint /bin/bash --mount type=bind,source="$$(pwd)",target=/src kbsb-dashboard-python
# with ports
python8000:
> docker run -it --entrypoint /bin/bash -p 8000:8000 --mount type=bind,source="$$(pwd)",target=/src kbsb-dashboard-python
