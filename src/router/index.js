const { Router } = require('express');
const { changeBase, getLatest } = require('../controller');
const router = Router();

router.get('/', changeBase);

module.exports = router;