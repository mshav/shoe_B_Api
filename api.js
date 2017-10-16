module.exports = function(models) {

  const home = function(req, res, done) {

    models.Shoe.find({}, function(err, result) {

      if (err) {

        res.send(err);
        res.json(result);
      }

      res.json({
        data: result
      })

    })

  }

  const add = function(req, res, done) {
    var stock = req.body
    console.log(stock.brand);
    console.log(stock.color);
    console.log(stock.size);
    console.log(stock.price);

    models.Shoe.create({
      brand: stock.brand,
      color: stock.color,
      size: stock.size,
      price: stock.price
    }, function(err, result) {
      if (err) {

        res.send(err);
        // res.json(stock);

      }

      res.json({

        data: result
      })

    })



  }



return {

  home,
  add

}
}
