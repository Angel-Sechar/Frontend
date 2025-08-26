#!/bin/sh

DOMAIN="campusproject08.com"
EMAIL="asv_18_1999@hotmail.com"

CERT_PATH="/etc/letsencrypt/live/campusproject08.com/fullchain.pem"
# # Check if certificate exists
# if [ ! -f "$CERT_PATH" ]; then
#     sed -i "s|/etc/letsencrypt/live/${DOMAIN}/fullchain.pem|/etc/nginx/ssl/nginx-selfsigned.crt|g" /etc/nginx/nginx.conf
#     sed -i "s|/etc/letsencrypt/live/${DOMAIN}/privkey.pem|/etc/nginx/ssl/nginx-selfsigned.key|g" /etc/nginx/nginx.conf
#   nginx -g "daemon off;" &
#     NGINX_PID=$!
#     sleep 5
#    certbot certonly --webroot -w /var/www/certbot -d campusproject08.com -d www.campusproject08.com --email asv_18_1999@hotmail.com --agree-tos --no-eff-email

#  kill $NGINX_PID
    
#     # Restore Let's Encrypt paths in nginx.conf
#     sed -i "s|/etc/nginx/ssl/nginx-selfsigned.crt|/etc/letsencrypt/live/${DOMAIN}/fullchain.pem|g" /etc/nginx/nginx.conf
#     sed -i "s|/etc/nginx/ssl/nginx-selfsigned.key|/etc/letsencrypt/live/${DOMAIN}/privkey.pem|g" /etc/nginx/nginx.conf

# fi


# message
exec nginx -g "daemon off;"
echo "Deployment completed!!! :D."