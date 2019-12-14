// Import libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize API
const app = express();
const port = process.env.port || 3030;

// Import API routes
const surveys = require('./api/surveys');
const scores = require('./api/scores');
const config = require('./api/config');

// Initialize DB
const db = require('./db');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({
		message: 'PegaSUS -- API'
	});
});

/** API -- Surveys */
surveys.getSurvey(app);
surveys.getSpecificSurvey(app);
surveys.postSurvey(app);

/** API -- Scores */
scores.getScores(app);

/** API -- Config */
config.getConfig(app);

app.listen(port);
