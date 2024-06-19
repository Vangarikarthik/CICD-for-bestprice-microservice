// laptop-microservice/models/LaptopModel.js
const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
  price: String,
  link: String,
  category: String,
});

const LaptopModel = mongoose.model('Laptop', laptopSchema);

module.exports = LaptopModel;
