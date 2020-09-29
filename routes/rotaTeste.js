var express = require('express');
const { routes } = require('../app');
var router = express.Router();

const rotaTesteMiddlewwaare = require('../middlewares/rotaTeste');
const rotaTesteController = require('../controllers/rotaTeste');

router.post("/", function(req, res, next){
    console.log("Foi enviado um request com o seguinte conteúdo", req.body);
    res.status(200).send( {"Message":"Você enviou dados para o servidor"} );
});

router.get("/", 
    rotaTesteMiddlewwaare.processaCalculo,
    rotaTesteController.resProcessaCalculo
);


module.exports = router;