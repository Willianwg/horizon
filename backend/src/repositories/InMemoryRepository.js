const crypto = require("crypto");

class InMemoryRepository {
    
    users = [];
    
    async createUser(name, email, password ){
        
        const user = { name, email, password }
        
        Object.assign(user, { 
            
            id:crypto.randomUUID()
            
        });
        
        this.users.push(user);
        
        return user;
    }
    
    async findOneUser({ email }){
        
        const user = this.users.find(item=>item.email === email);
        
        if(user) return user;
        
        return false;
    }
    
    async findUserById(id){
        return;
    }
    
    async editUser(id,name){
        
        return;
        
    }
    
    async getUserProducts(userId){
       return;
    }
}

module.exports = InMemoryRepository;