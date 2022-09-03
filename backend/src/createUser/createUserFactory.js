const CreateUserUseCase = require("./createUserUseCase");
const UsersRepositoryPG = require("../repositories/Postgres/User");
const CreateUserController = require("./createUserController");


function createUserFactory() {
    
    const usersRepository = new UsersRepositoryPG();
    const createUser = new CreateUserUseCase(usersRepository);
    const createUserController = CreateUserController(createUser);
    
    return createUserController;
    
}

module.exports = createUserFactory;