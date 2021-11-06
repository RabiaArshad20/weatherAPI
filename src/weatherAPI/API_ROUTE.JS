const API_CONTOLLER = require('./src/weatherAPI/API_CONTROLLER');

const Router = require('express');
const router = Router();
router.get('/',(req,res)=>{
    res.send(API_CONTOLLER());
});

module.exports = router;
