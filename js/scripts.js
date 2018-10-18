$(document).ready(function(){
  $("#animal").submit(function(event) {
    event.preventDefault();
    var animal = $("#animal-select").val();

    console.log(animal);

     if (animal === "Turtles"){
      //$("#three-animals").empty();
      $("#aboutsnakes").hide();
      $("#aboutinsects").hide();
      $("#aboutturtles").show();
    }

    else if (animal === "Snakes") {
      //$("#three-animals").empty();
      $("#aboutturtles").hide();
      $("#aboutinsects").hide();
      $("#aboutsnakes").show();
    }

    else if (animal === "Insects"){
      //$("#three-animals").empty();
      $("#aboutsnakes").hide();
      $("#aboutturtles").hide();
      $("#aboutinsects").show();
    }

  });
});
