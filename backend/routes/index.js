const express = require('express');
const router = express.Router();
const lotto = require('./lotto');

router.use('/lotto', lotto);

module.exports = router;