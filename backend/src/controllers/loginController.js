const UserRepository = require("../repositories/Postgres/User");
const jwt = require("jsonwebtoken");

function LoginController(repository){
    
    const database = repository || new UserRepository();
    
    async function show(req, res){
        const { email, password } = req.query;
        
        const user = await database.findOneUser({ email });
        
        if(!user) return res.status(401).json({ error:"User does not exists" });
        
        if(user.password !== password) return res.status(401).json({ error:"invalid password" });
        
        const token = jwt.sign({ id:user.id.toString() }, "Eu sou o milior", {
            expiresIn:86400
        })
        
        const userData ={
            name:user.name,
            email
        }
        
        
        return res.json({ user:userData, token });
    }
    
    return {
        show
    }
}

module.exports = LoginController;