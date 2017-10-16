const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoUrl);

  const Shoe = mongoose.model('shoe', {
  brand: String,
  color:String,
  size: Number,
  price: Number,
  in_stock:Number

  });

  return {
    Shoe
  };
}
