FROM node:14.16.0-alpine3.11

WORKDIR app/

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

CMD ["npm", "run", "start"]