FROM node:16-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package.json /app/
RUN rm -rf ./node_modules
RUN npm i --force

RUN chmod 777 node_modules

COPY . /app
ENV NODE_ENV=development
USER node

EXPOSE 3000

ENV PATH ./node_modules/.bin/:$PATH