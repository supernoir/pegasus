const express = require("express")
const cors = require("cors");
const app = express();
const port = process.env.port || 3030
app.use(cors())

app.get("/", (req,res)=> {
    res.json({
        message: "PegaSUS -- API"
    })
})

app.get("/surveys", (req,res) => {
    let testSurvey = {frequency: 5, complexity: 3, easeofuse: 5, support: 3, integration: 5};
    res.json({
        surveys: testSurvey
    })
})

app.get("/scores", (req,res) => {
    res.json({
        score: 22,
        scales: {
          frequency: 1.5,
          complexity: 0.5,
          easeofuse: 1,
          support: 0,
          integration: 1
        }
    })
})

app.listen(port)
