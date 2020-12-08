function insertSchedule(req, res, next){
    console.log('>>> caiu no controller, insert Schedule');
    res.status(200).send(req.body);
}

function listAllSchedules(req, res, next){
    res.status(200).send(req.body);
}

function getAllSchedulesByClient(req, res, next){
    res.status(200).send(req.body);
}

function deleteSchedule(req, res, next){
    res.status(200).send();
}

function getAllSchedulesByProfessional(req, res, next){
    res.status(200).send(req.body);
}


module.exports = {insertSchedule, listAllSchedules, getAllSchedulesByClient, getAllSchedulesByProfessional, deleteSchedule} 