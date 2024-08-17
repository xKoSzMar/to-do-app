FROM node:latest
WORKDIR /usr/node/to-do-app

COPY package*.json .
RUN npm install

EXPOSE 5173:5173
COPY . .
CMD [ "npm", "run", "dev-host" ]