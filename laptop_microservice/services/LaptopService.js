const LaptopModel = require('../models/LaptopModel');

const getAllLaptops = async () => {
  try {
    const laptops = await LaptopModel.find();
    return laptops;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllLaptops,
};
