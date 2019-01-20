const cfg = require("./config.json");

const redis = require("redis"),
client = redis.createClient(cfg.redis_port, cfg.redis_host);