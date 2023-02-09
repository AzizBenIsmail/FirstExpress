var express = require('express');  //npm run dev
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json("work")
});

/* GET home page. */
router.post('/somme', function (req, res, next) {
  //const x=req.body.x;
  //const y=req.body.y;
  try {
    const { x, y } = req.body;
    console.log( x, y);
    let somme=x+y;
    console.log(somme)
    if (!x || !y) {
      throw new Error("parametre muste be defined!");
    }
    if (!(Number.isInteger(x) && Number.isInteger(y))) {
      throw new Error("paramets mut be number");
    }
    res.json({
      //resultat:"la somme de x et y :",somme
      resultat: `la somme de x et y : ${x + y}`,

    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});
module.exports = router;
