// Create a new burger
$(".create").on("submit", function (e) {
    // e.preventDefault();

    var newBurger = {
      burger_name: $(".new-burger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
        method: "POST",
        data: newBurger
    }).then(function() {
        // location.reload();
    });
  });


  // Eat the burger
  $(".eat").on("click", function () {

    var ID = $(this).data("id");
    var devouredState = {devoured: 1};
    
    $.ajax("/api/burgers/" + ID, {
        type: "PUT",
        data: devouredState
    }).then(function() {
        location.reload();
    });
  });


  //Wash dishes || delete burger
  $(".wash").on("click", function () {
      
    var ID = $(this).data("id");

    $.ajax("/api/burgers/" + ID, {
        type: "DELETE",
    }).then(location.reload());
  });