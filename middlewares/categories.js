const categoryModel = require( "../models/categories");

async function insertCategory(req, res, next){
    console.log("entrou aqui");

    // {} -> findOne
    // [] -> find
    //let insercaoBanco = userModel.finnd("nome":"André");
    let insercaoBanco = await categoryModel.create(req.body);

    //TODO Verificar se já existe esse usuário pelo CPF
    console.log(">>> Inseriu no banco", insercaoBanco);
    next();
}

async function listAllCategories(req, res, next) {
    let listCategories = await categoryModel.find();
    req.body = listCategories;
    next();
}

// }
async function getCategory(req, res, next) {
    console.log(req.params.categoryID); 
    const category = await categoryModel.findById(req.params.categoryID)
    console.log(category); 
    
    req.body = category;
    next();
}

module.exports = {insertCategory, listAllCategories, getCategory}



