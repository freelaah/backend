// import multer from 'multer'; 
// import path from 'path'; 
// export default { 
//     storage: multer.diskStorage({ 
//         destination: path.resolve(__dirname, '..', '..', 'uploads'), 
//         filename: (req, file, cb) => { 
//             const ext = path.extname(file.originalname); 
//             const name = path.basename(file.originalname, ext); 
//             cb(null, `${name}-${Date.now()}${ext}`); 
//         }, }), }; 

const multer = require('multer');
var express = require('express');
var router = express.Router(0);

//const servicesMid = require('')

var storage = multer.diskStorage({

    destination: function(req, file, ch){
        cb(null, '')
    },
    //filename: function()
})
