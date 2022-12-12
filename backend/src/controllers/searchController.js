const Sequelize = require("sequelize");
const Product = require("../models/product");
const Seller = require("../models/seller");

module.exports = {

    async index(req, res) {

        const { pname } = req.query;

        const Op = Sequelize.Op;

        const results = await Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${pname}%`
                }
            }, include: [Seller]
        });

        return res.json(results);

    }
}