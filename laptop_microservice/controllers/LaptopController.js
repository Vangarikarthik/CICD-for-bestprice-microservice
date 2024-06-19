// laptop-microservice/controllers/LaptopController.js
const express = require('express');
const router = express.Router();
const LaptopService = require('../services/LaptopService');

router.get('/laptops', async (req, res) => {
  try {
    const laptops = await LaptopService.getAllLaptops();
    res.json(laptops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
