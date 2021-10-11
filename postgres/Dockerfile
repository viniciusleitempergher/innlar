FROM postgres

COPY schema.sql /docker-entrypoint-inidb.d/

EXPOSE 5432

VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]
