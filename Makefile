.PHONY: build
build:
	docker-compose build
	docker-compose run app rails db:create db:migrate

.PHONY: start
start:
	docker-compose up

.PHONY: stop
stop:
	docker-compose down
