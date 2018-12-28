#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	create database dating;
	create user admin with password 'admin';
	grant all privileges on database dating to admin;
EOSQL