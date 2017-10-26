$(function() {

var mysecTemplate = document.querySelector(".mysecTemplate").innerHTML;
var Table = Handlebars.compile(mysecTemplate);
var showTable = document.getElementById('showTable')
var button = document.getElementById('button').innerHTML;

      $.ajax({
        type: "GET",
        url: '/shoe/api',
        dataType: 'json',
        success: function(data) {

          showTable.innerHTML = Table({
            shoedata: data.data
          })
        },
        error: function(){
        alert("error!")
        }

      })




      $.ajax({
      type: "POST",
      url:'/api/shoe',
      dataType: 'json',
      succes: function(data) {

      }

      })
})
