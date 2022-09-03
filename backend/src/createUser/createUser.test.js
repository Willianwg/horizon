const CreateUser = require("./createUserUseCase");
const InMemoryRepository = require("../repositories/InMemoryRepository");

describe("Testando criacao de usuario", ()=>{
    
    it("Usuario deve ser criado com sucesso", async ()=>{
        
        const repository = new InMemoryRepository();
        
        const userCreate = new CreateUser(repository);
        
        const data ={
            name:"Test",
            email:"test@test.com",
            password:"abc"
        }
        
        const user = await userCreate.execute(data);
        
        expect(user).toHaveProperty("id");
    })
    
})