const Cart = require("../models/Cart");

module.exports = {
    
   async index(req, res){
       
       const carts = await Cart.findAll();
       
       return res.json(carts)
   }, 
    
   async store(req, res){
       
       const { price, code } = req.body;
       
       const data = { price, code }
       
       const newCart = await Cart.create(data);
       
       return res.json(newCart);
   },
   
   async show(req, res){
       
       const { id } = req.params;
       
       const cart = await Cart.findByPk(id);
       
       return res.json(cart);
   },
   
   async update(req, res){
       
       const { price, code } = req.body;
       const { id } = req.params;
       
       const cart = await Cart.findByPk(id);
       
       cart.price = price;
       cart.code = code;
       cart.save()
       
       return res.status(200).json(cart);
   },
   
   async destroy(req, res){
       
       const { id } = req.params;
       
       const cart = await Cart.findByPk(id);
       
       cart.delete();
       
       return res.status(200).json({ ok:"ok" });
       
   }
}