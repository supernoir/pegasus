const getScores = app => {
	app.get('/scores', (req, res) => {
		res.json({
			score : 22,
			scales: {
				frequency  : 1.5,
				complexity : 0.5,
				easeofuse  : 1,
				support    : 0,
				integration: 1
			}
		});
	});
};

module.exports = {
	getScores
};
