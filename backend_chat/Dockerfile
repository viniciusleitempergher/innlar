FROM node

WORKDIR /backend_chat

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]