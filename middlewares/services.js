const fs = require('fs')
const serviceModel = require('../models/services');

const userModel = require('../models/users');
const categoriaModel = require('../models/categories')

//const path = require('path'); 
// import multer from 'multer'; 
// 
// export default { 
//     storage: 


// const storage = multer.diskStorage({
//          destination: path.resolve(__dirname, '..', '..', 'uploads'), 
//          filename: (req, file, cb) => { 
//                  const ext = path.extname(file.originalname); 
//                   const name = path.basename(file.originalname, ext); 
//                   cb(null, `${name}-${Date.now()}${ext}`); 
//                }, });
              
// async function postService(req, res,next) {
// }
async function getService(req, res, next) {
    console.log(req.params.serviceID); 
    const service = await serviceModel.findById(req.params.serviceID)
    console.log(service); 
    // fs.readFile(teste.imgURL, {encoding: 'base64'}, (err, data) => { 
    //     console.log(data); 
    //     res.status(200).send({"file":data, "imgURL":teste.imgURL})
    //  }) 
    
    req.body = service;
    next();
}

async function getAllServices(req, res, next) {

    let listServices = await serviceModel.find();
    req.body = listServices;
    next();
}


async function insertService(req, res, next){
    
    //let data = {...req.body, "imgURL":req.file.path}
    console.log(">>>>", req.file.path)
    let data = {...req.body, "imgURL":req.file.originalname}
    //TODO tratar caso nao venha a descricao

    let insercaoBanco = await serviceModel.create(data);
    next();
}


async function getAllservicesByUser(req, res, next) {

    // rota /services/user/id
    const user_id = req.params.userID;
    const listServices = await serviceModel.find( {"id_user" : user_id});
    const objJSON = JSON.parse(JSON.stringify(listServices));
    const user = await userModel.findById("5fa1fa70fa669488f2176b28");
    
    for(const item in objJSON){
        const objCategoria = objJSON[item];
         let id_categoria = objCategoria.id_categoria;
         let categoria = await categoriaModel.findById(id_categoria);
        
         const objItem = Object.assign(objCategoria);
         Object.assign(objItem, {"categoria": categoria},{"user": user});
     }

    req.body = objJSON;
    next();

}
module.exports = { insertService, getService, getAllServices, getAllservicesByUser}