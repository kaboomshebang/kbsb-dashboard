# Debian based container
FROM python:3.11.1-slim-bullseye

# add Ubuntu packages
RUN apt-get update
RUN apt-get install -y make curl

# install Poetry
RUN curl -sSL https://install.python-poetry.org | python -

# add Poetry bin directory to path
ENV PATH="/root/.local/bin:$PATH"

# store virtual environments inside project directory
RUN poetry config virtualenvs.in-project true

# add aliasses to Bash shell for terminal convenience
RUN echo '\n# shell customization' >> $HOME/.bashrc
RUN echo 'alias ll="ls -la"' >> $HOME/.bashrc
RUN echo 'alias l="ls -la"' >> $HOME/.bashrc
RUN echo 'PS1="PyBox:\w > "' >> $HOME/.bashrc

# change dir
WORKDIR /src
