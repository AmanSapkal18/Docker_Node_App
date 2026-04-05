FROM node:22.12.0-alpine3.20

WORKDIR /app

COPY . .

#install all the packages specified in package*.json files
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]