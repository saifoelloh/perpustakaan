FROM node:lts-slim

WORKDIR /app

COPY ./package.json .

EXPOSE 3000

RUN yarn

COPY . .
