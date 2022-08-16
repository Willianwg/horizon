require("dotenv").config()
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_DB, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD,{ dialect:process.env.DATABASE_DIALECT, host:process.env.DATABASE_HOST
}
);

module.exports = sequelize;