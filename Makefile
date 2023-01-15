# https://www.linuxzen.com/notes/notes/20220822112621-your_makefiles_are_wrong/
# https://tech.davis-hansson.com/p/make/
# Set the shell (sh/bash)
SHELL := sh

# Enable bash strict mode.
.SHELLFLAGS := -eu -o pipefail -c

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

# Start frontend dev server
dev:
> cd app
> npm run dev

# Start Django dev server
django:
> echo "Django"
