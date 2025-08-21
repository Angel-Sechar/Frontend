#!/bin/bash

# Build Angular
bun run build -- --configuration=production

# Check if certificate exists
docker compose run --rm certbot certonly --webroot -w /var/www/certbot -d campusproject08 -d www.campusproject08 --email asv_18_1999@hotmail.com --agree-tos --no-eff-email



# Deploy with Docker Compose
docker-compose up -d --build

# message
echo "Deployment completed!!! :D."