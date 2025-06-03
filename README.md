# Configuration Files for my homelab

This repository contains configuration files for various services running in my homelab. The files are organized by service and include Docker Compose files, Nginx configurations, and other relevant settings.

## Compose Files

- **Cloudflare DDNS**: Automatically updates DNS records with Cloudflare based on current IP address.
- **Homepage**: A simple homepage setup
- **Immich**: Self-hosted photo and video management solution.
- **Jellyfin**: Media server for streaming movies, TV shows, and music.
- **Media Stack**: A collection of media indexers and managers. Services are placed behind a vpn using gluetun.
- **Nextcloud**: Self-hosted cloud storage solution.
- **Monitoring**: Monitoring stack using Prometheus, Grafana, and other tools.

## Nginx Configurations

- Using Cloudflare as a DNS provider, and using DNS-01 challenge for SSL certificates.
- Certificates are generated using certbot with the following command:
  ```bash
  certbot certonly --dns-cloudflare --dns-cloudflare-credentials /path/to/credentials.ini -d example.com -d www.example.com
  ```
- Nginx is configured to serve as a reverse proxy for the services, handling SSL termination and routing requests to the appropriate containers.

## Other Configurations

- **Homepage**: Config files for homepage setup.
