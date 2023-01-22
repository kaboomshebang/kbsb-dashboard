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

# change dir
WORKDIR /src

COPY . .

RUN poetry install

EXPOSE 8000

CMD ["poetry", "run", "python", "datadash/manage.py", "runserver", "0.0.0.0:8000"]
