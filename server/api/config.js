const getConfig = app => {
	app.get('/config', (req, res) => {
		res.json({
			config: {
				project: {
					name : 'Example Project',
					scope: 'Landing Page'
				},
				app: {
					name       : 'Example App',
					description: 'An app example to showcase customizing React SUS usage',
					lang       : 'en-GB',
					greeting   : 'Please take part in our survey to make sure we can improve your experience!'
				}
			}
		});
	});
};

module.exports = {
	getConfig
};
