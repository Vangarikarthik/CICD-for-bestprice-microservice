const express = require('express');
const router = express.Router();
const MobileService = require('../services/MobileService');

router.get('/mobiles', async (req, res) => {
  try {
    const mobiles = await MobileService.getAllMobiles();
    res.json(mobiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
