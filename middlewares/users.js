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


async function loginUser(req, res, next) {
   
   const login = req.body.login;
   const password = req.body.password;

    let user = await userModel.find({login: login});
    let body = {autorization: false};
    
    try{
        if(user[0].senha === password){
            body.autorization = true;
        }
    }catch(e){
        console.log("erro")
    }
    
    req.body = body;
    console.log(req.body);
    next();     
}


module.exports = {insertUser, listAllUsers, loginUser};