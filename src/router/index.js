const { Router } = require('express');
const { changeBase } = require('../controller');
const router = Router();

router.get('/', changeBase);

module.exports = router;