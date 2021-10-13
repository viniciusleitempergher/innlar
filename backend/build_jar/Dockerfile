FROM maven

WORKDIR /backend

COPY ../ .

CMD ["mvn", "-Dmaven.test.skip", "package"]