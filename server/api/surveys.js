const getSurveys = (app) => {
    app.get("/surveys", (req,res) => {
        let testSurvey = {frequency: 5, complexity: 3, easeofuse: 5, support: 3, integration: 5};
        res.json({
            surveys: testSurvey
        })
    })
}

module.exports = {
    getSurveys
}