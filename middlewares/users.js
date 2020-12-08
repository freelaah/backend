//Lógica
const jwt = require("jsonwebtoken");
const userModel = require( "../models/users");

async function insertUser(req, res, next){
    
    
    let data = req.body;

    if(data.cpf === null || data.nome === null || data.login === null || data.senha === null || data.telefone === null){
        console.log("Erro - dados incorretos")
        req.body = {error : "Dados incorretos"}
    }else{
        //TODO Verificar se já existe esse usuário pelo CPF
        let insercaoBanco = await userModel.create(req.body);
    }

    next();
}

async function listAllUsers(req, res, next) {
    let listUsers = await userModel.find();
    req.body = listUsers;
    next();
}

async function getUser(req, res, next) {
    const user = await userModel.findById(req.params.userID)
    console.log(user); 
    req.body = user;
    next();
}

async function checkLogin(req, res, next){
    
    let {login, password} = req.body; 
    let resultadoBanco = await userModel.findOne({"login": login, "senha":password});
    
   if(resultadoBanco){
    
    try{
        
        var token = jwt.sign({"type":resultadoBanco.tipo, "cpf": resultadoBanco.cpf, exp: Math.floor(Date.now() / 1000) + (60 * 120)}, 'palavraSuperSecreta');         
        res.locals.data = {token:token, type:resultadoBanco.tipo, authorization:true, id_user:resultadoBanco._id};
        
    }catch(e){
        console.log("erro", e);
    }

    return next();

   }else {
       res.locals.data = {authorization:false};
       return next();
   }   
}

module.exports = {insertUser, listAllUsers, checkLogin, getUser};