const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/Postgres/User");

function UserController(repository) {
    
    const database = repository || new UserRepository();
    
    async function store (req, res){
        
        const { name, email, password }= req.body;
        
        const user = await database.findOneUser({ email });
        
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
        
        const updatedUser = await database.editUser(id, name);
        
        return res.json(updatedUser);
        
    }
    
    
    return {
        update, show, store
    }
    
}

module.exports = UserController;