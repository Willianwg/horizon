const Transaction = require("../models/Transaction");
const TransactionService = require("../services/Transaction");

module.exports = {
    
   async index(req, res){
       
       const carts = await Transaction.findAll();
       
       return res.json(carts)
   }, 
   
   
   
   
   
   
   
   
    
   async store(req, res){
       
       const { 
           
           cartCode, paymentType, installments,
           boletoAdress, boletoNumber, boletoNeighborhood, boletoCity, boletoState, boletoZipCode,
           customerName, customerEmail, customerMobile, customerDocument,
           creditCardNumber, creditCardExpiration, creditCardHolderName, creditCardCvv
           
       } = req.body;
       
       
       const customer = { customerName, customerEmail, customerMobile, customerDocument }
       const boleto = { boletoAdress, boletoNumber, boletoNeighborhood, boletoCity, boletoState, boletoZipCode }
       const creditCard = { creditCardNumber, creditCardExpiration, creditCardHolderName, creditCardCvv }
       
       const transactionCreationResponse = await TransactionService.process({ cartCode, paymentType, installments, customer, boleto, creditCard });
       
       
       
       
       return res.json(transactionCreationResponse);
   },
   
   
   
   
   
   
   
   
   
   async show(req, res){
       
       const { id } = req.params;
       
       const cart = await Transaction.findByPk(id);
       
       return res.json(cart);
   },
   
     async update(req, res){
       
       const { price, code } = req.body;
       const { id } = req.params;
       
       const cart = await Transaction.findByPk(id);
       
       cart.price = price;
       cart.code = code;
       cart.save()
       
       return res.status(200).json(cart);
   },
   
   async destroy(req, res){
       
       const { id } = req.params;
       
       const cart = await Transaction.findByPk(id);
       
       cart.delete();
       
       return res.status(200).json({ ok:"ok" });
       
   }
}