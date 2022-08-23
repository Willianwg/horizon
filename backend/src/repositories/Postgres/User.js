const User = require ("../../models/user");


class UserPGRepository {
    
    async createUser(name, email, password){
        
        const newUser = await User.create({
            name,
            email,
            password
        });
        
        return newUser;
    }
    
    async findOneUser(query){
        
        const user = await User.findOne({ where:query });
        
        return user;
        
    }
    
    async findUserById(id){
        
       const user = await User.findByPk(id);
       
       return user;
    }
    
    async editUser(id,name){
        
        let user = await User.findByPk(id);
        
        user.name = name;
        
        await user.save()
        
        return user;
        
    }
    
}

module.exports = UserPGRepository;