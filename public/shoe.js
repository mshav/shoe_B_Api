// $(function() {
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
  var search = document.getElementById('search')
  var inputBox = document.getElementById("inputBox")

function showAllStock() {
  $.ajax({
    type: "GET",
    url: '/shoe/api',
    dataType: 'json',
    success: function(data) {

      showTable.innerHTML = Table({
        shoedata: data.data
      })

    }
  })

}
showAllStock();

  // $('#add').on("click", function() {
function addStock() {
  var brand = document.getElementById('brand');
  var color = document.getElementById('color');
  var size = document.getElementById('size');
  var price = document.getElementById('price');
  var in_stock = document.getElementById('in_stock');

  var data = {
    brand: brand.value,
    color: color.value,
    price: price.value,
    in_stock: in_stock.value,
    size: size.value
  }
  brand.value = "";
  color.value = "";
  price.value = "";
  in_stock.value = "";
  size.value = "";


    $.ajax({
      type: "POST",
      url: '/api/shoe',
      data : data,
      dataType: 'json',
      success: function(data) {
        showAllStock();

        }


      })

    }

  //search button
  $("#search").on("click", function() {
    //text box
    var inputBox = document.querySelector('#inputBox')
    //pass the
    var brandVal = inputBox.value;
    $.ajax({
      type: "GET",
      url: "/api/shoe/brand/" + brandVal,
      dataType: "json",
      success: function(data) {
        showTable.innerHTML = Table({
          shoedata: data
        })
      }
    })
  })
  showAllStock();



  $("#searchS").on("click", function() {
    var inputSize = document.querySelector("#inputSize")
    var SizeVal = inputSize.value;
    size.value = "";
    $.ajax({

      type: "GET",
      url: "/api/shoe/size/" + SizeVal,
      dataType: "json",
      success: function(data) {
        showTable.innerHTML = Table({

          shoedata: data
        })
      }
    })

  })
  showAllStock()



$(document).on("click", "#sell", function(e){
var target = e.target;
var shoeId = target.value;
$.ajax({
  type:"POST",
  url:'/api/shoes/sold/' + shoeId,

  success: function(data) {
    showAllStock()
    // showTable.innerHTML = Table({

      // shoedata: data
    // })
  }
})
console.log(shoeId);
// window.location.reload(10)
})
 // console.log(data);
// }
// }






///api/shoes/sold/:id
// })
