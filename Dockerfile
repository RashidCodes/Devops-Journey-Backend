FROM node:15.4.0-alpine3.10
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 2005

CMD ["npm", "start"]
