FROM openjdk:8

WORKDIR /code

RUN apt-get update && apt-get install python3 python3-pip -y && pip3 install psycopg2-binary

ADD dating/build/libs/dating-0.1.0.jar /code
ADD wait_for_db.py /
ADD docker-entrypoint.sh /

EXPOSE 8080

ENV POSTGRES_HOST db
ENV POSTGRES_PORT 5432
ENV POSTGRES_USERNAME admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DATABASE dating
