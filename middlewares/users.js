//var jwt = require('jsonwebtoken'); 
const jwt = require("jsonwebtoken");

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

async function checkLogin(req, res, next){
    
    let {login, password} = req.body; 
    let resultadoBanco = await userModel.findOne({"login": login, "senha":password});
    
   if(resultadoBanco){
    
    try{
        
        var token = jwt.sign({"type":resultadoBanco.tipo, "cpf": resultadoBanco.cpf, exp: Math.floor(Date.now() / 1000) + (60 * 1)}, 'palavrasupersecreta');         
        res.locals.data = {token:token, type:resultadoBanco.tipo, authorization:true};

        console.log(">>> token", token)
        
    }catch(e){
        console.log("erro", e);
    }

    return next();

   }else {
       res.locals.data = {authorization:false};
       return next();
   }   
}

module.exports = {insertUser, listAllUsers, checkLogin};