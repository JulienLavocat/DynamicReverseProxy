require("./proxy");
const redis = require("./redis");

redis.connect("localhost", 6379, (error) => {
    throw error;  
});

redis.set("test", "Hi");