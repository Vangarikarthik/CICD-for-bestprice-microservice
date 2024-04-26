const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
  price: String,
  link: String,
  category: String,
});

const MobileModel = mongoose.model('Mobile', mobileSchema);

module.exports = MobileModel;
