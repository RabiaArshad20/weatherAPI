const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const sensors = require('./modules/sensors/sensors.routes');

const weather = require('./modules/weather/weather.routes');

/** GET /health-check - zzzCheck service health */
router.get('/health-check', (req, res) => res.send('OK'));

router.use('/sensor', sensors);

router.use('/weather',weather);

module.exports = router;
