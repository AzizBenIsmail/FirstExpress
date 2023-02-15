var express = require('express');
var os = require("os")
var router = express.Router();


let tab=[{
	"MACBOOKPRO":{
        "name":"Macbook Pro",
        "manufacturer":"Apple",
        "price":1299,
        "stock":32,
        "options":["Intel core i5","Retina Display","Long life battery"]
    }},{
	"MACBOOKAIR":{
        "name":"Macbook Pro Air",
        "manufacturer":"Apple",
        "price":1099.99,
        "ultrabook":true,
        "stock":112,
        "options":["Intel core i7","SSD","Long life battery"]
    }},{
	 "LENOVOX230":{
        "name":"Thinkpad x230",
        "manufacturer":"Lenovo",
        "price":1099.99,
        "ultrabook":true,
        "stock":0,
        "options":["Intel core i5","SSD","Long life battery"]
    }}];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({
        hostname: os.hostname(),
        type:os.type(),
        platform: os.platform(),
    })
  });

  router.get('/cpus/', function (req, res, next) {
    res.json(tab)
  });

  router.get('/cpus/:id', async function (req, res, next) {
    var x = req.params.id;
    res.json(tab[x])
    console.log(tab[x])
  });

module.exports = router;