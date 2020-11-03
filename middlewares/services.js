const fs = require('fs')
const serviceModel = require('../models/services');

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
    const teste = await serviceModel.findById(req.params.serviceID)
    console.log(teste); 
    fs.readFile(teste.imgURL, {encoding: 'base64'}, (err, data) => { 
        console.log(data); 
        res.status(200).send({"file":data})
     }) 
}

async function getAllServices(req, res, next) {

    let listServices = await serviceModel.find();
    req.body = listServices;
    next();
}


async function insertService(req, res, next){
    
    let data = {...req.body, "imgURL":req.file.path}

    //TODO tratar caso nao venha a descricao

    let insercaoBanco = await serviceModel.create(data);
    next();
}

module.exports = { insertService, getService, getAllServices}