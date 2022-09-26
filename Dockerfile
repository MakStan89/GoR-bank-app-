FROM node:16.17-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
COPY index.d.ts /app/node_modules/@types/react-input-mask/index.d.ts

CMD ["npm", "start"]