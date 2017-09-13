var Sequelize = require('sequelize');
const SQL_USER = 'root';
const SQL_PASSWORD = '';

exports.sequelize = function () {
  return new Sequelize('bellamusic', SQL_USER, SQL_PASSWORD, {'dialect': 'mysql', host: 'localhost', port: 3306});
};
