const multer = require('multer');
var express = require('express');
var router = express.Router();

const servicesMiddleware = require('../middlewares/services');
const servicesController = require('../controllers/services');


var storage = multer.diskStorage({

    destination: function (req, file, cb) {
      console.log('>>> gravou no diretório')
      cb(null, './storage/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //Appending .jpg
    }
  
  });
  

const upload = multer({ storage: storage});

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

router.post('/',
  upload.single('image'),
  servicesMiddleware.insertService,
  servicesController.insertService
);


router.get('/',
    servicesMiddleware.getAllServices,
    servicesController.listAllServices
)


router.get('/:serviceID',
    servicesMiddleware.getService
)




module.exports = router;