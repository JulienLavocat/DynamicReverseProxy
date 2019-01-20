const redis = require("redis");

var client;

module.exports = 
class Redis {

    static connect(host, port, errorCallback) {
        if(client)
            client.quit();

        client = redis.createClient(port, host);
        client.on("error", errorCallback);
    }

    static get(key) {
        client.get(key, (err, reply) => {
            return reply;
        });
    }

    static set(key, value) {
        client.set(key, value, (err, reply) => {if(err) throw err;});
    }

}