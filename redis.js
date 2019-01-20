const redis = require("redis");
var client;

module.exports = 
class Redis {

    static connect(host, port, errorCallback) {
        client = redis.createClient(port, host);
        client.on("error", errorCallback);
    }

    static get(key) {
        return client.get(key, (err, value) => {if(err) throw err; return value;});
    }

    static set(key, value) {
        client.set(key, value, (err, reply) => {if(err) throw err;});
    }

}