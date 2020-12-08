var express = require('express');
var router = express.Router();

const rotaScheduleMiddleware = require('../middlewares/schedules');
const rotaScheduleController = require('../controllers/schedules');

router.post("/",
    rotaScheduleMiddleware.insertSchedule,
    rotaScheduleController.insertSchedule    
);

router.get("/", 
    rotaScheduleMiddleware.listAllSchedules,
    rotaScheduleController.listAllSchedules
);


router.get("/client/:clientID", 
    rotaScheduleMiddleware.getAllSchedulesByClient,
    rotaScheduleController.getAllSchedulesByClient
);

router.get("/professional/:professionalID", 
    rotaScheduleMiddleware.getAllSchedulesByProfessional,
    rotaScheduleController.getAllSchedulesByProfessional
);


router.delete("/:scheduleID", 
    rotaScheduleMiddleware.deleteSchedule,
    rotaScheduleController.deleteSchedule
);


module.exports = router;
