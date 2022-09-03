
class CreateUserUseCase {
    
    constructor(database){
       this.database = database;
    }
    
    async execute({ name, email, password }){
        
        const exists = await this.database.findOneUser({ email });
        
        if(exists){
            return false;
        }
        
        const user = await this.database.createUser(name, email, password );
        
        return user;
    }
    
}

module.exports = CreateUserUseCase;


