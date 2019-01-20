const cfg = require("./config.json");
const prefix = cfg.redis_prefix + ".";

const redis = require("redis"),
    client = redis.createClient(cfg.redis_port, cfg.redis_host);

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/drp/routes", (req, res) => {

    client.set(prefix + req.body.source, req.body.target, (err, reply) => {
        if(err) throw err;
        res.json(reply);
    });

});

app.delete("/drp/routes/:source", (req, res) => {

    client.del(prefix + req.params.source, (err, reply) => {
        if(err) throw err;
        res.json(reply);
    });

});

app.listen(cfg.drp_api_port, () => {
    console.log("API up and running on port " + cfg.drp_api_port);
});