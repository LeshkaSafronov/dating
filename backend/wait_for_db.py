import psycopg2
import os
import time
import logging


conn = "host='{host}' port='{port}' dbname='{db_name}' user='{user}' password='{password}'".format(
    host=os.environ['POSTGRES_HOST'],
    port=os.environ['POSTGRES_PORT'],
    db_name=os.environ['POSTGRES_DATABASE'],
    user=os.environ['POSTGRES_USERNAME'],
    password=os.environ['POSTGRES_PASSWORD']
)

while True:
    try:
        with psycopg2.connect(conn) as connect:
            logging.info("Postgres is up - executing command")
            break
    except psycopg2.Error as exp:
        logging.error(exp)
        logging.error("Postgres is unavailable - sleeping")
    time.sleep(1)