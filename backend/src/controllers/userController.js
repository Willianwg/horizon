const User = require ("../models/user");
   // const database = require ("./index");

module.exports = {
    
    async store (req, res){
        
        const { name, email, password }= req.body;
        
        const user = await User.findOne({where:{ email }});
        
        if(user) return res.status(400).json({ error:"Email já está cadastrado" });
        
        const newUser = await User.create({
            name,
            email,
            password
        });
        
        return res.json(newUser);
    },
    
    async show (req, res){
        
        if(!req.body.id){ 
            return res.status(400).json({ message:"Não foi fornecido o ID de usuário"});
        }
        
        const { id } = req.body;
        const user = await User.findByPk(id);
        
        return res.json(user);
        
    },
    
    async update (req, res){
        
        
        if(!req.body.id){ 
            return res.status(400).json({ message:"ID de usuário não fornecido"});
        }
        
        const { id, name, email } = req.body;
        let user = await User.findByPk(id);
        
        user.name = name;
        user.email = email;
        
        await user.save()
        
        return res.json(user);
        
    }
    
    
}