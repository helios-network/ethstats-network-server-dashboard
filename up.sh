docker buildx build --build-context clone=./ -t docker-ethstats-network-server-dashboard:v0.0.1 -f ./Dockerfile .
docker compose -f docker-compose.yml up -d