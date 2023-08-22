const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense-application", "root", "Snjay@66", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
