//Lógica

const userModel = require( "../models/users");

async function insertUser(req, res, next){
    
    // {} -> findOne
    // [] -> find
    //let insercaoBanco = userModel.finnd("nome":"André");
    let insercaoBanco = await userModel.create(req.body);

    //TODO Verificar se já existe esse usuário pelo CPF
        
    console.log(">>> Inseriu no banco");
    console.log(insercaoBanco);
    next();
}

async function listAllUsers(req, res, next) {
    let listUsers = await userModel.find();
    req.body = listUsers;
    next();
}


module.exports = {insertUser, listAllUsers};