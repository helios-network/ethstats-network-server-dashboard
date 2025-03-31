# Build the Docker image
docker buildx build --build-context clone=./ -t docker-ethstats-network-server-dashboard:v0.0.1 -f ./Dockerfile .

# Start the containers using docker-compose
docker compose -f docker-compose.yml up -d --build