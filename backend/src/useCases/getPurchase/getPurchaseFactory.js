const GetPurchase = require("./getPurchase");
const GetPurchaseController = require("./getPurchaseController");
const PurchaseRepository = require("../../repositories/Postgres/PurchaseRepository");


function getPurchaseFactory(){
    const purchaseRepository = new PurchaseRepository();
    const getPurchase = new GetPurchase(purchaseRepository);
    const getPurchaseController = GetPurchaseController(getPurchase);
    
    return getPurchaseController;
}

module.exports = getPurchaseFactory;