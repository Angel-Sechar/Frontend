FROM certbot/certbot:latest

# Install the Cloudflare DNS plugin
RUN pip install certbot-dns-cloudflare

# Create directories for certbot
RUN mkdir -p /etc/letsencrypt /var/log/letsencrypt /var/www/certbot

# Default working directory
WORKDIR /scripts

# By default, run certbot (overridden by docker-compose entrypoint)
ENTRYPOINT ["certbot"]
