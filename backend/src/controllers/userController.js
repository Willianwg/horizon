const jwt = require("jsonwebtoken");
const Provider = require("../repositories/Postgres");

function UserController(repository) {
    
    const database = repository || new Provider();
    
    async function store (req, res){
        
        const { name, email, password }= req.body;
        
        const user = await database.findUserByEmail(email);
        
        if(user) return res.status(400).json({ error:"Email já está cadastrado" });
        
        const newUser = await database.createUser(name,email,password);
        
        const token = jwt.sign({ id:newUser.id.toString() }, process.env.JWT_SECRET, {
            expiresIn:86400
        })
        
        return res.json({ user:newUser, token });
    }
    
    async function show (req, res){
        
        if(!req.body.id){ 
            return res.status(400).json({ message:"Não foi fornecido o ID de usuário"});
        }
        
        const { id } = req.body;
        const user = await database.findUserById(id);
        
        return res.json(user);
        
    }
    
    async function update (req, res){
        
        
        if(!req.body.id){ 
            return res.status(400).json({ message:"ID de usuário não fornecido"});
        }
        
        const { id, name, email } = req.body;
        let user = await database.findUserById(id);
        
        user.name = name;
        user.email = email;
        
        await user.save()
        
        return res.json(user);
        
    }
    
    
    return {
        update, show, store
    }
    
}

module.exports = UserController;