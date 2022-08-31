const User = require ("../../models/user");
const Product = require ("../../models/product");


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
    
    async getUserProducts(userId){
        //let user = await User.findByPk(userId, { include:Product });
        
        const user = { products:[{ price:1000, name:"nike"}] };
        
        return user.products;
    }
    
}

module.exports = UserPGRepository;