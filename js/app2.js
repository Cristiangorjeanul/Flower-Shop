$(function () {

  //Petals game
  //Color transition 
  $("#center, #petal1, #petal2, #petal3, #petal4, #petal5, #petal6, #petal7, #petal8").css("transition", "all 1s");
  //Array with desired colors
  var arr = ["red", "orange", "gold", "yellow", "blue", "cyan", "green", "lime", "purple", "pink", "magenta", "violet"];
  //Background color change
  function changeColor() {
    $("#center").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal1").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal2").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal3").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal4").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal5").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal6").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal7").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
    $("#petal8").css({
      backgroundColor: arr[parseInt(Math.random() * 12)]
    });
  }
  changeColor();
  setInterval(changeColor, 1000);
  //Removing clicked petals
  var petals = $('.petals');

  petals.on("click", function () {

    $(this).remove(); //removing li element

  });


});