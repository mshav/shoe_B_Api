module.exports = function(models) {
 const objectId = require('mongodb').objectId;
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

   //this function finds the brand and color,size,price
  const add = function(req, res, done) {
    var stock = req.body
    // console.log(stock.brand);
    // console.log(stock.color);
    // console.log(stock.size);
    // console.log(stock.price);

    models.Shoe.create({
      brand: stock.brand,
      color: stock.color,
      size: stock.size,
      price: stock.price,
      in_stock: stock.in_stock
    }, function(err, result) {
      if (err) {

        res.send(err);


      }

      res.json({

        data: result
      })

    })



  }
//this function focus on finding the brands that I have
const brandFunction = function(req, res, done){
var brand = req.params.brandname
console.log(brand);
models.Shoe.find({brand:brand},function(err, result){

if(err){

console.log(err)
}
res.json(result)

})

}


//this function is focus on the size I have in my database
const sizeFunction = function(req, res, done){

var size = req.params.size
models.Shoe.find({size:size}, function(err, result){


  if (err) {
    console.log(err);
  }
  res.json(result)
})


}
// this function is to retrieve the size and the brand
const sizeAndbrand = function(req, res, done){
 var size = req.params.size
 var brand = req.params.brandname
 models.Shoe.find({ size:size, brand:brand},function(err, result){

if (err) {

  console.log(err);
}
res.json(result)



 })



}

const stockReduce = function(req, res, done){
  var soldId = req.params.id
  models.Shoe.findOneAndUpdate({_id:soldId},{$inc:{in_stock :-1}},{upsert:false}, function(err, result){

if (err) {

  console.log(err);
}
res.json(result)

  })






}


return {

  home,
  add,
  brandFunction,
  sizeFunction,
  sizeAndbrand,
  stockReduce

}
}
// $("#search").on("click", function(){
//   var inputBox = document.querySelector('.inputBox')
//   var brandVal = inputBox.value;
// $.ajax({
// type:"GET",
// url:"/api/shoe/brand/" + brandVal,
// dataType: "json",
// success: function(data){
// drop.innerHTML = Table({
//
// shoe:data.data
//
//
// })
//
//
//
// }
//
//
//
//
// })
//
//
//
//
// })

// <!-- <button onclick="myFunction()">add stock</button>
//
// <div id="myDIV">
//
//   brand:<input   id="brand" type="text"  value="" required=""></input><br><br>
//   color:<input   id="color" type="text"  value="" required=""></input><br><br>
//   size:<input   id="size" type="text"  value="" required=""></input><br><br>
//   price:<input   id="price" type="text"  value="" required=""></input><br><br>
//   in_stock:<input   id="in_stock" type="text"  value="" required=""></input>
//   <button id="add" type="submit" required="">add</button>
// </div>
//
// <p><b>Note:</b> The element will not take up any space when the display property set to "none".</p>
//
// <script>
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
// </script> -->
//
