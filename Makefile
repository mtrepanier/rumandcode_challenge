.PHONY: build
build:
	docker-compose build
	docker-compose run app scripts/wait-for-it.sh postgresdb:5432 -- "rake db:create db:migrate"

.PHONY: start
start:
	docker-compose up

.PHONY: stop
stop:
	docker-compose down

.PHONY: cleanup
cleanup:
	docker-compose run app rubocop -a

.PHONY: seed_db
seed_db:
	docker-compose run app scripts/wait-for-it.sh postgresdb:5432 -- "rake db:seed"