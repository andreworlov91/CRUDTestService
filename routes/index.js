const express = require('express');
const router = express.Router();
const db = require('../server/db');

router.delete('/api/clear', db.clearSelectedTable);
router.post('/api/anyonequery', db.anyoneQuery);

module.exports = router;