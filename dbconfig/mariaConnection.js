const mariadb = require('mariasql'),
  sequalize = require('sequelize');
  var config=require('../config/dbconfig.json');

//Database Initialization using Sequalize (ORM)
var sequelize = new sequalize(config.mariaDB.db, config.mariaDB.username, config.mariaDB.password, {
  host: config.mariaDB.host,
  port: config.mariaDB.port,
  dialect: config.mariaDB.dialect,
  pool: {
    max: 30,
    min: 0,
    idle: 10000
  }
});

/* sequelize.authenticate()
  .then(function () {
    logger.info("Authentication Successful - MariaDB Connection Established");
  })
  .catch(function (err) {
    //logger.error("SOMETHING DONE GOOFED with Maria DB " + JSON.stringify(err));
  })
  .done(); */

module.exports = sequelize;