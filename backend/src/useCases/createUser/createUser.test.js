const CreateUser = require("./createUserUseCase");
const UserRepository = require("../../repositories/inMemory/UserRepository");

describe("Testando criacao de usuario", ()=>{
    
    let repository;
    let createUser;
    
    beforeAll(()=>{
        
       repository = new UserRepository();
        
       createUser = new CreateUser(repository);
     
    })
    
    it("Usuario deve ser criado com sucesso", async ()=>{
        
           
        const data ={
            name:"Test",
            email:"test@test.com",
            password:"abc"
        }
        
        const user = await createUser.execute(data);
        
        expect(user).toHaveProperty("id");
    });
    
    it("Nao deve ser possivel criar usuario", async()=>{
        
        const data ={
            name:"Test",
            email:"test@test.com",
            password:"abc"
        }
        
        await createUser.execute(data);
        
        let result

 
        const user = await createUser.execute(data);
     
        expect(user).toEqual(false);
        
    })
})