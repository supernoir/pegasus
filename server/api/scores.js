const { Survey, sequelize } = require('./../db');

const getScores = app => {
	app.get('/scores', (req, res) => {
		Survey.findAll({
			attributes: [
				'surveyScore',
				[sequelize.fn('COUNT', sequelize.col('surveyScore')), 'totalSurveys'],
				[sequelize.fn('AVG', sequelize.col('surveyScore')), 'averageScore']
			],
			group: ['surveyScore']
		}).then(result =>
			result.map(survey => {
				res.json({
					surveys     : 1,
					score       : 22,
					scoreAvg    : survey.dataValues.averageScore,
					totalSurveys: survey.dataValues.totalSurveys,
					scales      : {
						frequency  : 1.5,
						complexity : 0.5,
						easeofuse  : 1,
						support    : 0,
						integration: 1
					}
				});
			})
		);
	});
};

module.exports = {
	getScores
};
