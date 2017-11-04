$(function() {
// my template
var mysecTemplate = document.querySelector(".mysecTemplate").innerHTML;
var Table = Handlebars.compile(mysecTemplate);
// my empty div
var showTable = document.getElementById('showTable')
var brand = document.getElementById('brand')
var color = document.getElementById('color')
var size = document.getElementById('size')
var price = document.getElementById('price')
var in_stock = document.getElementById('in_stock')
var search =document.getElementById('search')
var inputBox = document.getElementById("inputBox")


      $.ajax({
        type: "GET",
        url: '/shoe/api',
        dataType: 'json',
        success: function(data) {


          showTable.innerHTML = Table({
            shoedata: data.data
          })

      }
        },


      )

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
showTable.innerHTML = Table({

shoedata: data.data

})


}

})

})
$("#search").on("click", function(){
   var inputBox = document.querySelector('#inputBox')
   var brandVal = inputBox.value;
 $.ajax({
 type:"GET",
 url:"/api/shoe/brand/" + brandVal,
 dataType: "json",
success: function(data){
 showTable.innerHTML = Table({
 shoedata:data
 })
}
})
})


 $("#searchS").on("click",function(){
 var inputSize = document.querySelector("#inputSize")
 var SizeVal = inputSize.value;
 $.ajax({

 type:"GET",
 url:"/api/shoe/size/" + SizeVal,
 dataType:"json",
 success: function(data){
showTable.innerHTML = Table({

shoedata:data
})
 }
 })

})









// window.location.reload(1)

})
