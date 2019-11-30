const { Survey, sequelize } = require('./../db');

const getAveragePerScale = scales => {
	let reducedScales = [];
	scales.map(scale => {
		console.log(scale);
	});
};

const getScores = app => {
	app.get('/scores/scales', (req, res) => {
		Survey.findAll({
			attributes: ['surveyData']
		}).then(result => {
			const allSurveys = result.map(entry => entry.dataValues.surveyData);
			getAveragePerScale(allSurveys);
			res.json({
				scales: {
					frequency  : 1.5,
					complexity : 0.5,
					easeofuse  : 1,
					support    : 0,
					integration: 1
				}
			});
		});
	});
	app.get('/scores/metrics', (req, res) => {
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
				scoreAvg    : averageScoreToTwoDecimalPoints,
				totalSurveys: totalSurveys
			});
		});
	});
};

module.exports = {
	getScores
};
