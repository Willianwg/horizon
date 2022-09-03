const crypto = require("crypto");

class CreateUserUseCase {
    
    constructor(database){
       this.database = database;
    }
    
    async execute({ name, email, password }){
        
        const user = { name, email, password };
        
        Object.assign(user, { 
            
            id:crypto.randomUUID()
            
        });
        
        test = this.database.createUser(user);
        
        return test;
    }
    
}

module.exports = CreateUserUseCase;


