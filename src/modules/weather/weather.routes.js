const {
    weathercontroller
} = require('./weather.controller');

const { Router } = require('express');
const router = Router();
router.get('/weathercontroller', weathercontroller);

module.exports = router;
