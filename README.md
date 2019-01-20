# DynamicReverseProxy

DynamicReverseProxy (DRP) is a simple NodeJS reverse proxy which works like a normal reverse proxy, except that you don't need to configure each subdomain.

DRP let you create a subdomain per customer, project, anything you want by simply making an API call.

## Usage

### DRP Setup

1) Download and install Redis (https://redis.io/download)

2) Edit DRP's config (config.json)

3) Start DRP using: `node app.js`

  

### Subdomains registration

1) Create a new DNS record with a wildcard as subdomain: *.exemple.com and point it to where DynamicReverseProxy is listening

2) To register a new subdomain use this endpoint:

```
POST - /drp/routes
{"source":"publicly.accessible.domain", "target":"http://another-service.internal:8000"}
```

3) If you want to modify a route, just post it again with the new target

3) If you want to delete a route, just call:

`DELETE - /drp/routes/:domain`