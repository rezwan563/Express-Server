FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install yarn

RUN corepack enable

RUN yarn set version stable

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 4000

CMD [ "yarn", "start" ]