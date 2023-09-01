FROM node:14 as Production

ENV DB_CONNECTION="mongodb://lk:mnilklsfstbs@ac-huerc9j-shard-00-00.mxqkuug.mongodb.net:27017,ac-huerc9j-shard-00-01.mxqkuug.mongodb.net:27017,ac-huerc9j-shard-00-02.mxqkuug.mongodb.net:27017/?ssl=true&replicaSet=atlas-g80hnx-shard-0&authSource=admin&retryWrites=true&w=majority"
ENV CRYPTO_KEY="secret_crypto_key"
ENV JWT_KEY="secret_jwt_key"

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "sh", "-c", "npm run start" ]