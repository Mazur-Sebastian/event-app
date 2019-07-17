include tools.Makefile

.PHONY: build-dev dev test load-fixtures
FIXTURES-FILES := $(addprefix ./fixtures/, $(notdir $(wildcard ./app/fixtures/*.json)))

dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
staging-dockerfile = -f docker-compose.yml -f docker-compose.staging.yml

db-container = $$(docker ps -q -f name=postgres)

build-dev:
	docker-compose $(dev-dockerfile) build

dev:
	docker-compose $(dev-dockerfile) up

build-staging:
	docker-compose $(staging-dockerfile) build

staging:
	docker-compose $(staging-dockerfile) up -d

test:
	docker-compose exec backend ./manage.py test $(variadic_args)

load-fixtures:
	docker-compose exec -d backend bash -c "./manage.py loaddata $(FIXTURES-FILES)"

dump_db:
	docker-compose exec -T postgres pg_dumpall -c -U postgres > ./db_dump.sql
