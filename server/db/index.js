const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/postgres');

/*
const connection = new Sequelize('postgres','user','pass',{
    host: 'localhost',
    dialect: 'postgres'
})
*/

const Config = sequelize.define(
	'config',
	{
		name: {
			type : Sequelize.STRING,
			field: 'name'
		},
		scope: {
			type : Sequelize.STRING,
			field: 'scope'
		}
	},
	{
		freezeTableName: true
	}
);

const Score = sequelize.define(
	'score',
	{
		score : Sequelize.FLOAT,
		scales: Sequelize.JSON({
			frequency  : Sequelize.FLOAT,
			complexity : Sequelize.FLOAT,
			easeofuse  : Sequelize.FLOAT,
			support    : Sequelize.FLOAT,
			integration: Sequelize.FLOAT
		})
	},
	{
		freezeTableName: true
	}
);

const Survey = sequelize.define(
	'survey',
	{
		surveyId: {
			type: Sequelize.UUID
		},
		surveyData: Sequelize.JSON({
			scales: Sequelize.JSON({
				id: {
					type: Sequelize.NUMBER
				},
				value: {
					type: Sequelize.NUMBER
				}
			})
		}),
		surveyScore: Sequelize.FLOAT
	},
	{
		freezeTableName: true
	}
);

Config.sync({ force: true }).then(() => {
	return Config.create({
		name : 'Example',
		scope: 'Landing Page'
	});
});

Score.sync().then(() => {
	return Score.create({
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

module.exports = {
	sequelize,
	Survey,
	Score
};
