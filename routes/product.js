const express = require("express");
const router = express.Router();
const products = require("../products.json");
router.get("/", (req, res, next) => {
  try {
    if (!products) {
      throw new Error("products not found!");
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    if (!products[id]) {
      throw new Error("product not found!");
    }
    res.json(products[id]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/instock/:qt", (req, res, next) => {
  try {
    const { qt } = req.params;
    let productsToBuy = [];
    for (const [key, value] of Object.entries(products)) {
      if(value.stock >= qt){
        productsToBuy.push({key, value});
      }
    }
    if(productsToBuy.length === 0){
        throw new Error("products out of stock!");
    }
    res.json(productsToBuy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id/:qt", (req, res, next) => {
  try {
    const { id, qt } = req.params;
    if (!products[id]) {
      throw new Error("product not found!");
    }
    let productToBuy = {
      id: id,
      qt: parseInt(qt),
      unit_price: parseInt(products[id].price),
      total_price: parseInt(products[id].price) * parseInt(qt),
    };
    res.json(productToBuy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;