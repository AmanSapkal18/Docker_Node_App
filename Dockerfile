FROM node:alpine3.23

WORKDIR /app

COPY . .

#install all the packages specified in package*.json files
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]