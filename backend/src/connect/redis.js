const { createClient } = require("redis");

const redisClient = createClient();

function getCache(key){
    return new Promise(async resolve =>{
        const cache = await redisClient.get(key);

        resolve(JSON.parse(cache));
    })
}

function setCache(key, value){
    return new Promise(async resolve =>{
        await redisClient.set(key, JSON.stringify(value));
        resolve();
    })
}

module.exports = { redisClient, getCache, setCache };