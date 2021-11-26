const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    success: 'api works'
  })
})

module.exports = router; 