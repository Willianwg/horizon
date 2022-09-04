const SavePurchase = require ("./savePurchase");
const SavePurchaseController = require("./savePurchaseController");
const PurchaseRepository = require ("../../repositories/Postgres/PurchaseRepository");

function savePurchaseFactory(){
    const purchaseRepository = new PurchaseRepository();
    const savePurchase = new SavePurchase(purchaseRepository);
    const controller = SavePurchaseController(savePurchase);
    
    return controller;
    
    
}

module.exports = savePurchaseFactory;