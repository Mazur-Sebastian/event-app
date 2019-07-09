FROM node:latest

RUN apt-get -y update \
    && apt-get install -y git

RUN yarn global add @vue/cli

WORKDIR /frontend

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn
COPY . .
RUN chmod 777 node_modules

CMD yarn run serve