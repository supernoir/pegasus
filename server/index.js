const express = require("express")
const redis = require('redis');

const app = express();
const port = process.env.port || 3030

const redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready',() => {
 console.log("Redis is ready");
});

redisClient.on('error',() => {
 console.log("Error in Redis");
});

app.get("/", (req,res)=> {
    res.json({
        message: "React SUS -- Server"
    })
})

app.post("/survey", (req,res) => {
    let testSurvey = {frequency: 5, complexity: 3, easeofuse: 5, support: 3, integration: 5};

      redisClient.SADD("surveys", JSON.stringify(testSurvey), (err,reply) => {
        if (err) {
            res.json({
                error: err
            })
        } else {
            res.json({
                surveys: reply
            })
        }
       });
})

app.delete("/surveys", (req,res) => {
    let testSurvey = {frequency: 5, complexity: 3, easeofuse: 5, support: 3, integration: 5};

      redisClient.DEL("surveys", (err,reply) => {
        if (err) {
            res.json({
                error: err
            })
        } else {
            res.json({
                surveys: reply
            })
        }
       });
})

app.get("/surveys", (req, res)=> {
    redisClient.SMEMBERS('surveys', (err, reply) => {
        if (err) {
            res.json({
                error: err
            })
        } else {
            res.json({
                surveys: JSON.parse(reply)
            })
        }
    });
});

app.listen(port)