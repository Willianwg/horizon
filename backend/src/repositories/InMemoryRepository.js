class InMemoryRepository {
    
    users = [];
    
    async createUser({ name, email, password, id }){
        
        const user = { id, name, email, password }
        
        this.users.push(user);
        
        return user;
    }
    
    async findOneUser(query){
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