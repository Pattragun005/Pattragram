function deleteData(id){
  $.ajax({
    url: ' http://localhost:3000/posts/'+id,
    type: 'DELETE',
        dataType: 'json',
        success: function (data, status, xhr) {
         alert('ลบได้แล้วเว้ย')// นี้คือเสดแล้วใช่ป่ะของ Delete
      }
});
}

var idpost;

function Edit(){
  
              let params = {}
              document.location.search.substr(1).split('&').forEach(pair => {
              [key, value] = pair.split('=')
                  params[key] = value
              })
              console.log(location.search);
              if(location.search == ""){
                  document.getElementById('update').style.visibility = 'hidden' ;
                  document.getElementById('postpin').style.visibility = 'visible' ;
                  return;
              }
  
              $("#budget").val(decodeURIComponent(params['budget']));
              $("#way2go").val(decodeURIComponent(params['way2go']));
              $("#item").val(decodeURIComponent(params['item']));
              $("#beware").val(decodeURIComponent(params['beware']));
  
              idpost = decodeURIComponent(params['id']);
  
              document.getElementById('postpin').style.visibility = 'hidden' ;
              document.getElementById('update').style.visibility = 'visible' ;
              
          }

          function Update(){
           
            var data = 
              {
                budget: $("#budget").val(),
                way2go: $("#way2go").val(),
                item: $("#item").val(),
                beware: $("#beware").val(),
                id: idpost
              };

              console.log(data);

            $.ajax({
              url: "http://localhost:3000/posts/" + idpost,
              type: 'PUT', 
              data: data,
              success: function (result) {
                alert('อัพเดดได้แล้วโว้ยยยยยยยยยยย!!!')
                setTimeout(window.location.href = "index.html", 1000);
            }});

          }

var items = [];
function edit(id){
  var url = "http://localhost:3000/posts/" + id ;
  $.getJSON( url, function( data ) {
    
    $.each( data, function( key, val ) {
      items.push(val);
    });

    window.location.href = "postpin.html?"+ "budget=" + items[1] 
    +"&"+ "way2go=" + items[2]
    +"&"+ "item=" + items[3]
    +"&"+ "beware=" + items[4]
    +"&"+ "id=" + items[0];

    //item[0] = budget
    //item[1] = way2go
    //item[2] = item
    //item[3] = beware


  });
 
}



$(document).ready(function(){

//insert
var url = "http://localhost:3000/posts";
  $("#postpin").click(function () {

    var budget = $("#budget").val();
    var way2go = $("#way2go").val();
    var item = $("#item").val();
    var beware = $("#beware").val();

    $.post(url, {
      
      budget : budget,
      way2go : way2go,
      item : item,
      beware: beware
     
    });
    alert('completed');
    setTimeout(window.location.href = "index.html", 1000); 
  });

//delete
  

//read
var url = "http://localhost:3000/posts";
$.get(url, function (data) {
  var template = $('#template').html();
  var diffDays = 0;
  for (var i = 0; i < data.length; i++) {
    var rendered = Mustache.render(template, data[i]);
    $("#timeline").append(rendered);
  }
});});