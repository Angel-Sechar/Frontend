#!/bin/sh
set -e

DOMAIN="${DOMAIN}"
EMAIL="${CLOUDFLARE_EMAIL}"

echo "Checking SSL certificates for ${DOMAIN}..."
if [ ! -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]; then
    echo "Requesting new certificate via Cloudflare DNS..."
    
    certbot certonly --dns-cloudflare --dns-cloudflare-credentials /cloudflare/cloudflare.ini --email ${EMAIL} \
        --agree-tos --no-eff-email --force-renewal -d ${DOMAIN} -d www.${DOMAIN}
        
    echo "Certificate obtained successfully!"
else
    echo "Certificate already exists for ${DOMAIN}"
fi

# Auto-renewal loop
echo "Starting auto-renewal loop..."
while true; do
    sleep 12h
    echo "Checking for renewal..."
    certbot renew --quiet --dns-cloudflare --dns-cloudflare-credentials /cloudflare/cloudflare.ini
done