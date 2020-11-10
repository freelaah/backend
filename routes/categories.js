var express = require('express');
var router = express.Router();

const rotaCategoryMiddleware = require('../middlewares/categories');
const rotaCategoryController = require('../controllers/categories');

router.post("/",
    rotaCategoryMiddleware.insertCategory,
    rotaCategoryController.insertCategory    
);

router.get("/", 
    rotaCategoryMiddleware.listAllCategories,
    rotaCategoryController.listAllCategories
);

module.exports = router;
