#!/usr/bin/env bash
set -e

python3 /wait_for_db.py

java -jar dating-0.1.0.jar