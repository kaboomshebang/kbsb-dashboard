# Alpine based node
FROM node:18-alpine

# install make
RUN apk add make

# add aliasses to Alpine Ash shell
RUN echo '' >> $HOME/.ashrc
RUN echo '# shell customization' >> $HOME/.ashrc
RUN echo 'alias ll="ls -la"' >> $HOME/.ashrc
RUN echo 'alias l="ls -la"' >> $HOME/.ashrc
RUN echo 'PS1="NodeBox: \w > "' >> $HOME/.ashrc
# source aliasses
ENV ENV="/root/.ashrc"

# change dir
WORKDIR /src
