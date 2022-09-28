const GetPurchase = require("./getPurchase");
const GetPurchaseController = require("./getPurchaseController");
const PurchaseRepository = require("../../repositories/Postgres/PurchaseRepository");
const ProductRepository = require("../../repositories/Postgres/Product");

function getPurchaseFactory(){
    const purchaseRepository = new PurchaseRepository();
    const productRepository = new ProductRepository();

    const getPurchase = new GetPurchase(purchaseRepository, productRepository);
    const getPurchaseController = GetPurchaseController(getPurchase);
    
    return getPurchaseController;
}

module.exports = getPurchaseFactory;