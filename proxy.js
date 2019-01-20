const cfg = require("./config.json");
const prefix = cfg.redis_prefix + ".";

const redis = require("redis"),
    client = redis.createClient(cfg.redis_port, cfg.redis_host);

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on("error", (err, req, res, target) => {
    res.writeHead(500, "ISE");
    res.end();
});

var server = http.createServer(function (req, res) {

    //TODO: check if host has no subdomain
    //Has subdomain -> redirect from redis
    //Hasn't subdomain -> process as api requests

    get(req.headers.host).then((value) => {

        if(!value)
            value = cfg.drp_fallback;

        console.log(value);

        proxy.web(req, res, {target: value});
    });

});

async function get(host) {
    return await getAsync(prefix + host);
}

console.log("Reverse proxy up and running on port " + cfg.drp_port)
server.listen(cfg.drp_port);