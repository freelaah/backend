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
    
    const imgURL = (req.file === undefined) ? "sem_imagem.jpg" : req.file.originalname;
    let data = {...req.body, "imgURL":imgURL}
    let insercaoBanco = await serviceModel.create(data);
    req.body = insercaoBanco;

    next();
}


async function getAllservicesByUser(req, res, next) {
    // rota -> /services/user/id
    const id_user = req.params.userID;
    const listServices = await serviceModel.find( {"id_user" : id_user});
    const objJSON = JSON.parse(JSON.stringify(listServices));
    const user = await userModel.findById(id_user);
    
    for(const item in objJSON){
        const objCategoria = objJSON[item];
         let id_categoria = objCategoria.id_categoria;
         let categoria = await categoriaModel.findById(id_categoria);
        
         const objItem = Object.assign(objCategoria);
         Object.assign(objItem, {"categoria": categoria},
                                {"user": user}, 
                      );
     }

    req.body = objJSON;
    next();
}

async function getAllservicesByCategory(req, res, next){
    // rota -> /services/category/id
    const id_categoria = req.params.categoryID;
    const listServices = await serviceModel.find( {"id_categoria" : id_categoria});

    req.body = listServices;
    next();
}

async function deleteService(req, res, next){
    const id_service = req.params.serviceID;

    serviceModel.findByIdAndDelete(id_service, function (err) {
        if(err) console.log(err);
        next();
      });    
}

module.exports = { insertService, getService, getAllServices, getAllservicesByUser, getAllservicesByCategory, deleteService}