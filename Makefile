## Variables ###

containers-tool = docker-compose
dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
prod-dockerfile = -f docker-compose.yml -f docker-compose.yml

### Build & start app ###

.PHONY: build-dev
build-dev:
	$(containers-tool) $(dev-dockerfile) build

.PHONY: build-prod
build-staging:
	$(containers-tool) $(prod-dockerfile) build

.PHONY: dev
dev:
	$(containers-tool) $(dev-dockerfile) up

.PHONY: prod
staging:
	$(containers-tool) $(prod-dockerfile) up -d