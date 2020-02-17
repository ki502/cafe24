const express = require('express');
const router = express.Router();
const lotto = require('../controller/lotto');

router.get('/:count', lotto.getLottoInfo);

module.exports = router;