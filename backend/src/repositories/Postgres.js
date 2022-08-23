const User = require ("../models/user");


class PostgresRepository {
    
    async createUser(name, email, password){
        
        const newUser = await User.create({
            name,
            email,
            password
        });
        
        return newUser;
    }
    
    async findUserByEmail(email){
        
        const user = await User.findOne({where:{ email }});
        
        return user;
        
    }
    
    async findUserById(id){
        
       const user = await User.findByPk(id);
       
       return user;
    }
    
    
}

module.exports = PostgresRepository;