down:
	docker-compose down

build-db:
	mkdir -p db/data && sudo chmod -R 777 db/data
	docker build -t db db

build-backend:
	pushd "${PWD}/backend/dating" && ./gradlew build && popd
	docker build -t backend backend

build-frontend:
	pushd "${PWD}/frontend/dating" && ng build --prod && popd
	docker build -t frontend frontend

build: build-db build-backend build-frontend

up: down build
	docker-compose up -d
