function deletepost(id) {
  alert('DELETE ?');

  //Delete from back end
  $.ajax({
    url: "http://localhost:3000/posts/" + id, // post id
    type: "DELETE" // Use DELETE
  })
  alert('CONFIRM ?');
  setTimeout(window.location.href = "index.html");
  //Delete from front end
  $("#post" + id).empty();

}

function editpost(id, budget, way2go, item, beware) {
  console.log();
  var url = "http://localhost:3000/posts";
  $("#budget" + id).hide();
  $("#budgetedit" + id).prop('type', "text");
  $("#way2go" + id).hide();
  $("#way2goedit" + id).prop('type', "text");
  $("#item" + id).hide();
  $("#itemedit" + id).prop('type', "text");
  $("#beware" + id).hide();
  $("#bewareedit" + id).prop('type', "text");

}

function savepost(id, budget, way2go, item, beware) {
  console.log();

  var url = "http://localhost:3000/posts";

  $("#budget" + id).show();
  $("#budgetedit" + id).prop('type', "hidden");
  $("#way2go" + id).show();
  $("#way2goedit" + id).prop('type', "hidden");
  $("#item" + id).show();
  $("#itemedit" + id).prop('type', "hidden");
  $("#beware" + id).show();
  $("#bewareedit" + id).prop('type', "hidden");

  var budget = budget;
  var way2go = way2go;
  var item = item;
  var beware = beware;
  var newposts = {};

  newposts.id = id;
  newposts.budget = $("#budget" + id).val();
  newposts.way2go = $("#way2go" + id).val();
  newposts.item = $("#item" + id).val();
  newposts.beware = $("#beware" + id).val();

  var urls = "http://localhost:3000/posts/" + data.id;
  $.ajax({
    type: 'PUT',
    data: newposts,
    url: urls,
    success: function () {
      //no data...just a success (200) status code
      console.log(newposts);
    }
  });

}

function updatepost(id, budget, way2go, item, beware) {

  var budget = budget;
  var way2go = way2go;
  var item = item;
  var beware = beware;
  var newposts = {};

  newposts.id = id;
  newposts.budget = $("#budget" + id).val();
  newposts.way2go = $("#way2go" + id).val();
  newposts.item = $("#item" + id).val();
  newposts.beware = $("#beware" + id).val();

  var url = "http://localhost:3000/posts/" + id;
  $.ajax({
    type: 'PUT',
    data: newposts,
    url: url,
    success: function () {
      //no data...just a success (200) status code
      console.log(newposts);
    }
  });
}

$(document).ready(function () {

  //insert
  var url = "http://localhost:3000/posts";
  $("#postpin").click(function () {

    var budget = $("#budget").val();
    var way2go = $("#way2go").val();
    var item = $("#item").val();
    var beware = $("#beware").val();

    $.post(url, {

      budget: budget,
      way2go: way2go,
      item: item,
      beware: beware

    });
    alert('POST?');
    setTimeout(window.location.href = "index.html", 1000);
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
  });
});