const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const laptopRouter = require('./controllers/LaptopController');
const LaptopModel = require('./models/LaptopModel');
const laptopProducts = require('./laptopData'); // Import laptopProducts

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/laptops', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if laptop products already exist in the database
LaptopModel.find({}, { _id: 0, name: 1 }).then((existingProducts) => {
  const existingProductNames = new Set(existingProducts.map(product => product.name));

  const newProducts = laptopProducts.filter((product) => {
    return !existingProductNames.has(product.name);
  });

  if (newProducts.length > 0) {
    LaptopModel.insertMany(newProducts)
      .then(() => {
        console.log("New laptop products added successfully");
      })
      .catch((error) => {
        console.error("Error adding new laptop products:", error);
      });
  } else {
    console.log("No new laptop products to add");
  }
}).catch((error) => {
  console.error("Error checking existing laptop products:", error);
});

app.use('/', laptopRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
