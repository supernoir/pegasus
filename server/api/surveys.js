const score = require('./../services/CalculateScore');
const { Survey } = require('./../db');
const uuid = require('uuid');

const getSurvey = app => {
	app.get('/survey', (req, res) => {
		Survey.findAll().then(result => {
			res.json({
				surveys: result.map(survey => survey.dataValues)
			});
		});
	});
};

const getSpecificSurvey = app => {
	app.get('/survey/:id', (req, res) => {
		Survey.findOne({
			where: {
				surveyId: req.params.id
			}
		}).then(result => {
			res.json({
				survey: result.dataValues
			});
		});
	});
};

const postSurvey = app => {
	app.post('/survey', (req, res) => {
		const calc = new score.CalculateScore();
		if (req.body && req.body.length > 0) {
			let score = calc.deriveScore(req.body);

			Survey.sync().then(() => {
				return Survey.create({
					surveyId   : uuid(),
					surveyData : req.body,
					surveyScore: score
				});
			});
			res.json({
				score: score
			});
		} else {
			console.log({ score: 'No Score!' });
			res.json({
				score: null
			});
		}
	});
};

module.exports = {
	getSurvey,
	getSpecificSurvey,
	postSurvey
};
