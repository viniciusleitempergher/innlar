FROM maven

WORKDIR /backend

COPY . .

RUN mvn clean package

EXPOSE 8080

CMD ["ls"]