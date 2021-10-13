FROM maven

WORKDIR /backend

COPY ../ .

EXPOSE 8080

ENTRYPOINT ["mvn", "spring-boot:run"]