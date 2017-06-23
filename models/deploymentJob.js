const Sequelize = require('sequelize'),
mariaConnection = require('../dbconfig/mariaConnection');

var DepJob = mariaConnection.define('sample', {
Id: 
{
	type :Sequelize.INTEGER,
	primaryKey :true
},
StartDateTime :
{
	type :Sequelize.DATE
},
EndDateTime: 
{
	type :Sequelize.DATE
},
Status:
{
	type :Sequelize.INTEGER
},
ApplicationName:
{
	type :Sequelize.STRING
},
CreatedBy:
{
	type :Sequelize.STRING
},
CreatedOn:
{
	type :Sequelize.DATE
},
ModifiedOn:
{
	type :Sequelize.DATE
},
ModifiedBy:
{
	type :Sequelize.STRING
},
IsDeleted:
{
	type :Sequelize.BOOLEAN
},
Configuration_Id:
{
	type :Sequelize.INTEGER
},
SignOffUser:
{
	type:Sequelize.STRING
}

}, {
    timestamps: false,
    tableName: 'sample'
  },
  {
    freezeTableName: true  // Model tableName will be the same as the model name
  });

module.exports = DepJob;

