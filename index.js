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
  $.ajax({
    url: ' http://localhost:3000/posts',
    type: 'DELETE',
        dataType: 'json',
           data: '',
    success: function(response) { console.log('PUT completed'+response); }
        });

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