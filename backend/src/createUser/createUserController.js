
class createUserController {
    
    constructor(userCreate){
        this.userCreate = userCreate;
    }
    
    async handle(req, res){
        
        const { name, email, password } = req.body;
        
        const user = userCreate.execute({ name, email, password });
        
        return res.json(user);
        
    }
    
}

