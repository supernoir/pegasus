const { Survey, sequelize } = require('./../db');

const getScores = app => {
	app.get('/scores', (req, res) => {
		Survey.findAndCountAll({
			attributes: [[sequelize.fn('COUNT', sequelize.col('surveyScore')), 'totalSurveys'], [sequelize.fn('AVG', sequelize.col('surveyScore')), 'averageScore']],
			group     : ['surveyScore']
		}).then(result => {
			let surveyCounts = result.count.map(c => c.count);
			let totalSurveys = surveyCounts.reduce((a, b) => Number(a) + Number(b));

			let surveyScores = result.count.map(c => c.surveyScore);
			let totalScores = surveyScores.reduce((a, b) => Number(a) + Number(b));
			let averageSurveyScore = totalScores / surveyScores.length;
			let averageScoreToTwoDecimalPoints = Math.round(averageSurveyScore * 100) / 100;

			res.json({
				surveys     : 1,
				score       : 22,
				scoreAvg    : averageScoreToTwoDecimalPoints,
				totalSurveys: totalSurveys,
				scales      : {
					frequency  : 1.5,
					complexity : 0.5,
					easeofuse  : 1,
					support    : 0,
					integration: 1
				}
			});
		});
	});
};

module.exports = {
	getScores
};
