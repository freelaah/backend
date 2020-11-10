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

module.exports = router;
