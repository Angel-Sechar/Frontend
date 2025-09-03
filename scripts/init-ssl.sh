#!/bin/sh

set -e

CLOUDFLARE_INI="/etc/letsencrypt/cloudflare.ini"

# Create cloudflare.ini with proper permissions
echo "Cloudflare credentials file created at $CLOUDFLARE_INI"
chmod 600 "$CLOUDFLARE_INI"

# Test if domain exists in Cloudflare (optional debug step)
echo "Testing Cloudflare API connection..."

# Request certificate
certbot certonly \
  --verbose \
  --debug \
  --dns-cloudflare \
  --dns-cloudflare-credentials /etc/letsencrypt/cloudflare.ini\
  --dns-cloudflare-propagation-seconds 60 \
  --email asv70537592@gmail.com \
  --agree-tos \
  --non-interactive \
  --dry-run \
  -d angeljsv.com

echo "Certificate obtained successfully!"