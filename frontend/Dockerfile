FROM node

WORKDIR /frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 1900 1902

CMD ["npm", "start"]