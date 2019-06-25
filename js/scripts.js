$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());

    for (var i = 1; i <= number; i+=1){
      if (i % 3 === 0){
        $("ul").append("<li> ping </li>");
      } else if (i % 5 === 0){
        $("ul").append("<li> pong</li>")
      } else if (i % 15 === 0){
        $("ul").append("<li> pingpong</li>")
      } else {
        $("ul").append("<li>"+ i  + "</li>")
      }
    }
  $("#output").show(number);
  });


  this.remove();
});
