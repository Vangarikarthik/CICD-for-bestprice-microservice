const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mobileRouter = require('./controllers/MobileController');
const MobileModel = require('./models/MobileModel');
const mobileProducts = require('./mobileData'); // Import mobileProducts

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mobiles', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if mobile products already exist in the database
MobileModel.find({}, { _id: 0, name: 1 }).then((existingProducts) => {
  const existingProductNames = new Set(existingProducts.map(product => product.name));

  const newProducts = mobileProducts.filter((product) => {
    return !existingProductNames.has(product.name);
  });

  if (newProducts.length > 0) {
    MobileModel.insertMany(newProducts)
      .then(() => {
        console.log("New mobile products added successfully");
      })
      .catch((error) => {
        console.error("Error adding new mobile products:", error);
      });
  } else {
    console.log("No new mobile products to add");
  }
}).catch((error) => {
  console.error("Error checking existing mobile products:", error);
});

app.use('/', mobileRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
