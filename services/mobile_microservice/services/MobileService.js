const MobileModel = require('../models/MobileModel');

const getAllMobiles = async () => {
  try {
    const mobiles = await MobileModel.find();
    return mobiles;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllMobiles,
};
