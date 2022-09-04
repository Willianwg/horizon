const jwt = require("jsonwebtoken");

function CreateUserController(createUser) {

    this.createUser = createUser;
    
    async function handle(req, res){
        
        const { name, email, password } = req.body;
        
        const user = await this.createUser.execute({ name, email, password });
        
        if(!user) return res.json({ error:"User already exists"});
        
        const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET, {
            expiresIn:86400
        })
        
        return res.json({ user, token });
        
    }
    
    
    return {
        handle
    }
    
}

module.exports = CreateUserController;
