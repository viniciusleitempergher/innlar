<h1 align="center"> Innlar </h1>

<p align="justify"> Segundo a <a href="https://www2.deloitte.com/br/pt/pages/real-estate/articles/comportamento-consumidor-imoveis-2040.html" target="blank">pesquisa da Deloitte</a> realizada em julho de 2019 os clientes, ao buscar por um imóvel, cada vez mais buscam por um processo mais rápido, menos burocrático e mais automatizado. É por isso que, nós da TechStation, decidimos realizar a Innlar, onde você compra direto com o dono e não fica refém de intermediações quais cobram taxas excessivas em cima do valor do imóvel.</p>

<h1 align="center"> Tecnologias </h1>
<p> Tecnologias utilizadas no projeto: </p>

 * Expo
 * React-Native
 * Typescript
 * Axios
 * Java
 * SpringBoot
 * Hibernate
 * PostgreSQL
 * Swagger
 * JSON Web Tokens
 * Refresh Token
 * OAuth 2
 * Docker

 <h1 align="center"> Como Rodar </h1>
 <p> O projeto inteiro está "dockerizado", então para rodálo é muito fácil! </p>
 <p> Siga os comandos abaixo na pasta raiz e teste você mesmo: </p>



 * docker build -t postgresql_innlar_image ./postgres
<br/><br/>

 * docker network create innlar_network

<br/><br/>

 * docker run -d -p 5432:5432 --name innlar_postgres_container --network innlar_network -e POSTGRES_PASSWORD=admin -e POSTGRES_USER=postgres postgresql_innlar_image
<br/><br/>

 * docker build -t build_jar_image ./backend/build_jar/
 * docker run -d --name build_jar_container -v C:\Users\Vinícius\Desktop\tcc\innlar\backend:/backend/ --rm build_jar_image

<br/><br/>

 * docker build -t backend_innlar_image ./backend

 * docker run -d -p 8080:8080 --name backend_innlar_container --network innlar_network -e DATABASE_ADDRESS=innlar_postgres_container -e DATABASE_PORT=5432 -e DATABASE_NAME=innlar -e DATABASE_USERNAME=postgres -e DATABASE_PASSWORD=admin -e JWT_ACCESS_SECRET=alguma_senha -e JWT_REFRESH_SECRET=alguma_outra_senha -e JWT_ACCESS_SECONDS_VALIDITY=2400 -e JWT_REFRESHTOKEN_HOURS_VALIDITY=24 -e GOOGLE_AUTH_CLIENT_ID=seu_cliente_google -v C:\Users\Vinícius\Desktop\tcc\innlar\backend:/backend/ backend_innlar_image

<br/><br/>

 * docker build -t dev_backend_innlar_image ./backend/dev_image

 * docker run -d -p 8080:8080 --name backend_innlar_container --network innlar_network -e DATABASE_ADDRESS=innlar_postgres_container -e DATABASE_PORT=5432 -e DATABASE_NAME=innlar -e DATABASE_USERNAME=postgres -e DATABASE_PASSWORD=admin -e JWT_ACCESS_SECRET=alguma_senha -e JWT_REFRESH_SECRET=alguma_outra_senha -e JWT_ACCESS_SECONDS_VALIDITY=2400 -e JWT_REFRESHTOKEN_HOURS_VALIDITY=24 -e GOOGLE_AUTH_CLIENT_ID=seu_cliente_google -v C:\Users\Vinícius\Desktop\tcc\innlar\backend:/backend/ dev_backend_innlar_image

<br/><br/>

 * docker build -t backend_chat_innlar_image ./backend_chat

 * docker run -d -p 3000:3000 --name backend_chat_innlar_container --network innlar_network -v C:\Users\Vinícius\Desktop\tcc\innlar\backend_chat:/backend_chat/ backend_chat_innlar_image

<br/><br/>

 * docker build -t frontend_innlar_image ./frontend

 * docker run -d -p 19000:19000 -p 19002:19002 --name frontend_innlar_container --network innlar_network -e BACKEND_API_URL=http://backend_innlar_container:8080 -e BACKEND_CHAT_SOCKET_URL=http://backend_chat_innlar_container:3000 -v C:\Users\Vinícius\Desktop\tcc\innlar\frontend:/frontend/ -e EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0 frontend_innlar_image