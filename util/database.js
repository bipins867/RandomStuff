const Sequelize = require('sequelize');
require("dotenv").config();

console.log("aaaaaaaaaaaaaaaaaaaa=>",process.env.SQL_PASSWORD)
const sequelize = new Sequelize('mdb', 'root', 'bipinsingh', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
