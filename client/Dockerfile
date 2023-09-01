FROM node:14 as Production

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "sh", "-c", "npm run start" ]