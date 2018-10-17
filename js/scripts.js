$(document).ready(function(){
  $("#nameform").submit(function() {
    var nameoutput = $("input#name").val();

    $(".nameoutput").append(nameoutput);

    $(".letterbody").show();

    event.preventDefault();
  });
});
