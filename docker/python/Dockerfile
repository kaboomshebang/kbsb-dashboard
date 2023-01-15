# Debian based container
FROM python:3.11.1-slim-bullseye

# add Ubuntu packages
RUN apt-get update
RUN apt-get install -y make curl

# install Poetry
RUN curl -sSL https://install.python-poetry.org | python -

# add Poetry bin directory to path
ENV PATH="/root/.local/bin:$PATH"

# add aliasses to Bash shell for terminal convenience
RUN echo '\n# alias for ls command' >> $HOME/.bashrc
RUN echo 'alias ll="ls -la"' >> $HOME/.bashrc
RUN echo 'alias l="ls -la"' >> $HOME/.bashrc

# change dir
WORKDIR /src
