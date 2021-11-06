const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const sensors = require('./modules/sensors/sensors.routes');

const weatherAPI = require('./weatherAPI/API_ROUTE');

/** GET /health-check - zzzCheck service health */
router.get('/health-check', (req, res) => res.send('OK'));

router.use('/sensor', sensors);

router.use('/weatherAPI',weatherAPI);

module.exports = router;
