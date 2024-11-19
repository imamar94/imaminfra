## Need to be installed in the server
- git
- docker

## SSH
```
ssh imamadmin@51.136.38.13
```

## Setting up TLS with Certbot
Start the containers without SSL for first ACME challenge:
```
sudo docker-compose -f docker-compose.init.yml up
```

Running nginx and web service
```
sudo docker-compose --profile service up -d
```

Obtain the SSL certificate:
```
sudo docker-compose run --rm certbot
```

Restart the Nginx container to apply the SSL configuration:
```
sudo docker-compose restart webserver
```

Set up auto-renewal for the SSL certificate:
Create a cron job or a scheduled task to run the following command every 3 months:
```
sudo docker-compose run --rm certbot renew
```
