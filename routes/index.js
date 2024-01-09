const router = require('express').Router;
const apiRoutes = require('./api');

router.user('/api', apiRoutes);

module.exports = router;