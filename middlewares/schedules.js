const scheduleModel = require( "../models/schedules");

async function insertSchedule(req, res, next){
    console.log("entrou aqui");

    // {} -> findOne
    // [] -> find
    //let insercaoBanco = userModel.finnd("nome":"André");
    let insercaoBanco = await scheduleModel.create(req.body);

    //TODO Verificar se já existe esse usuário pelo CPF
    console.log(">>> Inseriu no banco", insercaoBanco);
    next();
}

async function listAllSchedules(req, res, next) {
    let listSchedules = await scheduleModel.find();
    req.body = listSchedules;
    next();
}

module.exports = {insertSchedule, listAllSchedules}

