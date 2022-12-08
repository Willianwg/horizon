const Sequelize = require("sequelize");
const Product = require("../models/product");

module.exports = {

    async index(req, res) {

        const { pname } = req.query;

        const Op = Sequelize.Op;

        const results = await Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${pname}%`
                }
            }
        }
        );

        return res.json(results);

    }
}