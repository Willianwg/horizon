const Cart = require("../models/Cart";

module.exports = {
    
   async index(req, res){
       
       const carts = await Cart.findAll();
       
       return res.json(carts)
   }, 
    
   async store(req, res){
       
       const { price } = req.body;
       
       const data = { price }
       
       const newCart = await Cart.create(data);
       
       return res.json(newCart);
   },
   
   async show(req, res){
       
       const { id } = req.body;
       
       const cart = await Cart.findByPk(id);
       
       return res.json(cart);
   },
   
   async update(req, res){
       
       const { price } = req.body;
       const { id } = req.headers;
       
       const cart = await Cart.findByPk(id);
       
       cart.price = price;
       cart.save()
       
       return res.status(200).json({ ok:"ok" });
   },
   
   async delete(req, res){
       
       const { id } = req.body;
       
       const cart = await Cart.findByPk(id);
       
       cart.delete();
       
       return res.status(200).json({ ok:"ok" });
       
   }
}