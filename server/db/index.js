const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://localhost:5432/postgres');

/*
const connection = new Sequelize('postgres','user','pass',{
    host: 'localhost',
    dialect: 'postgres'
})
*/

const Config = sequelize.define('config', {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    scope: {
      type: Sequelize.STRING,
      field: 'scope'
    }
  }, {
    freezeTableName: true
  });

  const Survey = sequelize.define('survey', {
      uniqueId : {
        type: Sequelize.UUID
      },
      scale: {
          type: Sequelize.JSON({
              id: {
                type: Sequelize.ENUM("frequency", "complexity", "easeofuse", "support", "integration", "consistency", "learnability", "functionality", "confidence", "uptake"),
                field: 'survey_id'
              },
              value: {
                type: Sequelize.NUMBER,
                field: 'survey_val'
              }
          })
      }
  }, {
    freezeTableName: true
  });

  Config.sync({force: true}).then(() => {
    return Config.create({
      name: 'Example',
      scope: 'Landing Page'
    });
  });

  Survey.sync({force: true}).then(() => {
    return Survey.create({
        uniqueId: "b6da1a15-87bf-46f2-a49a-8d286341be99",
        scale: [
            {
                id: "frequency",
                value: 2
            },
            {
                id: "complexity",
                value: 1
            }
        ]
    });
  });

module.exports = {
    sequelize
}