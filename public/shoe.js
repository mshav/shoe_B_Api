$(function() {

var mysecTemplate = document.querySelector(".mysecTemplate").innerHTML;
var Table = Handlebars.compile(mysecTemplate);
var showTable = document.getElementById('showTable')
var brand = document.getElementById('brand')
var color = document.getElementById('color')
var size = document.getElementById('size')
var price = document.getElementById('price')
var in_stock = document.getElementById('in_stock')

      $.ajax({
        type: "GET",
        // url: '/shoe/api',
        dataType: 'json',
        success: function(data) {
          console.log(data);

          showTable.innerHTML = Table({
            shoedata: data.data
          })

        },
        error: function(){
        alert("error!")
        }

      })

$('#add').on("click", function(){
$.ajax({
type: "POST",
url: '/api/shoe',
dataType: 'json',
data:{
brand:brand.value,
color:color.value,
price:price.value,
in_stock:in_stock.value,
size:size.value
},
success: function(data){
brand.innerHTML = Table({

shoedata: data.data

})


}



})







})
// window.location.reload(1)

})
