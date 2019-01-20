# DynamicReverseProxy
DynamicReverseProxy (DRP) is a simple NodeJS reverse proxy which works like a normal reverse proxy, except that you don't need to configure each subdomain.
DRP let you create a subdomain per customer, or project, you name it.
Simply call to a 

## Usage

### DRP Setup
1) Download and install Redis (https://redis.io/download)
2) Edit DRP's config (config.json)
3) Start DRP using: //TODO: startup command

### Subdomains registration
1) Create a new DNS record with a wildcard as subdomain: *.exemple.com
and point it to where DynamicReverseProxy is listening
2) Register all the subdomains you want, at anytime using this endpoint:
    //TODO: create endpoint documentation
   POST - /drp/routes/ 
    {"source":"publicly.accessible.domain","target":"http://another-service.internal:8000"}

3) If you want to modify a route, just post it again with the new target
3) If you want to delete a route, just call:
    DELETE - /drp/routes/:domain
4) Now your subdomain redirect where you tell it to !


