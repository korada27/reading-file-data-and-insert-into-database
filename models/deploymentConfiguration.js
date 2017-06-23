const Sequelize = require('sequelize'),
mariaConnection = require('../dbconfig/mariaConnection');

var DepConf = mariaConnection.define('DeploymentConfiguration', {
Id:
{ 	type: Sequelize.INTEGER,
	primaryKey :true
},
Configuration :
{
	type:Sequelize.STRING
},
CreatedBy: 
{
	type:Sequelize.STRING
},
CreatedOn:
{
	type:Sequelize.DATE
},
ModifiedOn:
{
	type:Sequelize.DATE
},
ModifiedBy:
{
	type:Sequelize.STRING
},
IsDeleted:
{
	type:Sequelize.BOOLEAN
}
}, {
    timestamps: false,
    tableName: 'DeploymentConfiguration'
  },
  {

    freezeTableName: true  // Model tableName will be the same as the model name
  });

module.exports = DepConf;

