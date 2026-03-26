FROM node:24.4.0-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY bower.json ./

RUN npm install --unsafe-perm
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
