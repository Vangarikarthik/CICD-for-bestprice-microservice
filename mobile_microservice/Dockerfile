FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm install -g npm@latest
COPY . .


RUN npm install

EXPOSE 5001

CMD ["npm","start"]
