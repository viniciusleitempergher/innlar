FROM node

WORKDIR /frontend

COPY package*.json .

RUN npm install --global expo-cli
RUN npm install

COPY . .

EXPOSE 19000 19001 19002

ENTRYPOINT ["npm", "start"]