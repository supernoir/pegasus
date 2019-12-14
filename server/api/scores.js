const { Survey, sequelize } = require('./../db');

const getAveragePerScale = scales => {
	let flattenedScales = scales.reduce((acc, val) => acc.concat(val[0].scales), []);

	let compiledScales = flattenedScales.reduce((reducedScales, scale) => {
		if (scale.id in reducedScales) {
			reducedScales[scale.id].count++;
			reducedScales[scale.id].totalValue += scale.value;
			reducedScales[scale.id].averageValue = Math.round(reducedScales[scale.id].totalValue / reducedScales[scale.id].count * 100) / 100;
		} else {
			reducedScales[scale.id] = { count: 1, totalValue: scale.value, averageValue: scale.value };
		}
		return reducedScales;
	}, []);
	return compiledScales;
};

const scaleTranslation = [
	'Frequency',
	'Complexity',
	'Ease of Use',
	'Support',
	'Integration',
	'Consistency',
	'Learnability',
	'Encumbrance',
	'Confidence',
	'Uptake'
];

const getScores = app => {
	app.get('/scores/scales', (req, res) => {
		Survey.findAll({
			attributes: ['surveyData']
		}).then(result => {
			const allSurveys = result.map(entry => entry.dataValues.surveyData);
			let averagedSurveys = getAveragePerScale(allSurveys);
			let compiledSurveys = scaleTranslation.map((scale, index) => {
				return { [scale]: averagedSurveys[index] ? averagedSurveys[index].averageValue : 0 };
			});
			let flattenedSurveys = Object.assign({}, ...compiledSurveys.map(item => item));

			res.json({
				scales: flattenedSurveys
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
