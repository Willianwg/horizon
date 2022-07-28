const Sequelize = require("sequelize");

const sequelize = new Sequelize("fxrozocn","fxrozocn","R4-MWFJ5DJ-SdZp_is5Ugh65wS4Aj5JT",{ dialect:"postgres", host:"rosie.db.elephantsql.com"
}
);

module.exports = sequelize;