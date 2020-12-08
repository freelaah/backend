const scheduleModel = require( "../models/schedules");
const userModel = require('../models/users');
const categoriaModel = require('../models/categories')
const serviceModel = require('../models/services')

async function insertSchedule(req, res, next){
    let insercaoBanco = await scheduleModel.create(req.body);
    //TODO Verificar se já existe esse usuário pelo CPF
    next();
}

async function listAllSchedules(req, res, next) {
    let listSchedules = await scheduleModel.find();
    req.body = listSchedules;
    next();
}

async function getAllSchedulesByClient(req, res, next) {
    // rota -> /schedules/cliente/id

    const id_cliente = req.params.clientID;
    const listSchedules = await scheduleModel.find( {"id_cliente" : id_cliente});
    const objJSON = JSON.parse(JSON.stringify(listSchedules));

    //dados do cliente
    const cliente = await userModel.findById(id_cliente);
    
    for(const item in objJSON){
        const objSchedule = objJSON[item];

         const id_profissional = objSchedule.id_profissional;
         const id_servico = objSchedule.id_servico;
         
         //dados do profissional        
         const profissional = await userModel.findById(id_profissional);
         
         //dados do servico
         const servico = await serviceModel.findById(id_servico);

         const id_categoria = servico.id_categoria;
         
         //dados da categoria
         const categoria = await categoriaModel.findById(id_categoria);
        
         const objItem = Object.assign(objSchedule);
         Object.assign(objItem, {"profissional": profissional},
                                {"cliente": cliente},
                                {"servico": servico},
                                {"categoria" : categoria}
                      );
     }

    req.body = objJSON;
    next();
}


async function getAllSchedulesByProfessional(req, res, next) {
    // rota -> /schedules/professional/id

    const id_profissional = req.params.professionalID;
    const listSchedules = await scheduleModel.find( {"id_profissional" : id_profissional});
    const objJSON = JSON.parse(JSON.stringify(listSchedules));

    //dados do profissional
    const profissional = await userModel.findById(id_profissional);
    
    for(const item in objJSON){
        const objSchedule = objJSON[item];

         const id_cliente = objSchedule.id_cliente;
         const id_servico = objSchedule.id_servico;
         
         //dados do cliente        
         const cliente = await userModel.findById(id_cliente);
         
         //dados do servico
         const servico = await serviceModel.findById(id_servico);

         const id_categoria = servico.id_categoria;
         
         //dados da categoria
         const categoria = await categoriaModel.findById(id_categoria);
        
         const objItem = Object.assign(objSchedule);
         Object.assign(objItem, {"profissional": profissional},
                                {"cliente": cliente},
                                {"servico": servico},
                                {"categoria" : categoria}
                      );
     }

    req.body = objJSON;
    next();
}


async function deleteSchedule(req, res, next){
    
    const id_schedule = req.params.scheduleID;
    scheduleModel.findByIdAndDelete(id_schedule, function (err) {
        if(err) console.log(err);
        next();
      });    
}

module.exports = {insertSchedule, listAllSchedules, getAllSchedulesByClient, getAllSchedulesByProfessional, deleteSchedule}

