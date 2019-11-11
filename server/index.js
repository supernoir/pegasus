const express = require("express")
const cors = require("cors");
const app = express();
const surveys = require("./api/surveys")
const scores = require("./api/scores")
const config = require("./api/config")
const port = process.env.port || 3030

app.use(cors())

app.get("/", (req,res)=> {
    res.json({
        message: "PegaSUS -- API"
    })
})

/** API -- Surveys */
surveys.getSurveys(app)

/** API -- Scores */
scores.getScores(app)

/** API -- Config */
config.getConfig(app)

app.listen(port)

