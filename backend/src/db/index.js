require("dotenv").config()
const Sequelize = require("sequelize");

console.log(process.env.DATABASE_DB)

const sequelize = new Sequelize(process.env.DATABASE_DB, process.env.USERNAME, process.env.DATABASE_PASSWORD,{ dialect:process.env.DATABASE_DIALECT, host:process.env.DATABASE_HOST }
);

module.exports = sequelize;