var express = require('express');
var router = express.Router();

class product {
    constructor(id,name,manufacturer,price,stock,pors,disk,dis,ultrabook) {
      this.id = id;  
      this.name = name;
      this.manufacturer = manufacturer;
      this.price = price;
      this.stock = stock;
      this.options=[pors,disk,dis]
      this.ultrabook = ultrabook;
    }
  }
  let product1 = new product("MACBOOKPRO", "Macbook Pro","Apple",1299,32,"Intel core i5","Retina Display","Long life battery");
  let product2 = new product("MACBOOKAIR", "Thinkpad x230","Lenovo",1099.99,112,"Intel core i7","SSD","Long life battery",true);
  let product3 = new product("LENOVOX230", "Macbook Pro","Apple",1099.99,0,"Intel core i5","SSD","Long life battery",true);

  var products=[{product1,product2,product3}]

    router.get('/', async function (req, res, next) {
        //var x = req.params.id;
        res.json(product1)
      });

      router.get('/:id', async function (req, res, next) {
        var x = req.params.id;
        res.json(product1)
        //console.log(tab[x])
      });

    module.exports = router;