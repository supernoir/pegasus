const score = require("./../services/CalculateScore")

const getSurvey = (app) => {
    app.get("/survey", (req,res) => {
        let testSurvey = {frequency: 5, complexity: 3, easeofuse: 5, support: 3, integration: 5};
        res.json({
            surveys: testSurvey
        })
    })
}

const postSurvey = (app) => {
    app.post("/survey", (req,res) => {
        const exampleData = [{
            scales: {
                id   : 1,
                value: 2
            }
        },{
            scales: {
                id   : 2,
                value: 4
            }
        },{
            scales: {
                id   : 3,
                value: 1
            }
        }];

        console.log(req.body)
        const calc = new score.CalculateScore();
        const sample = calc.deriveScore(exampleData);

        res.json({
            score: sample,
            request: req.body
        })
    })
}

module.exports = {
    getSurvey,
    postSurvey
}