const express = require('express');

const router = express.Router();

const ctrl = require('../../controlers/tickets');

router.get('/', ctrl.getAll);

router.get('/:ticketID', ctrl.getById);

module.exports = router;
