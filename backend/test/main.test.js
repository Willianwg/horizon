const UserController = require("../src/controllers/userController");


class userDatabase {
    
    async createUser(name, email, password){
        
        const user = { id:"123", name, email, password }
        
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


describe("Testando", ()=>{
    
    it("criacao de usuario", async ()=>{
        
        const newUser = {
            body:{
                name:"Diego",
                email:"Diego@gmail.com",
                password:"abc"
            }
        }
        
        
        const userController = UserController(new userDatabase());
        
        const response = userController.store(newUser);
        
        expect(response).toHaveProperty("id")
    
    
    })
})