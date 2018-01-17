$(document).ready(function() {
  $("#grocery-form").submit(function(event) {
    event.preventDefault();
    var groceriesArray = ["grocery1", "grocery2", "grocery3"];
    var newGroceriesArray = groceriesArray.map(function(grocery) {
      var newGrocery = $("input#" + grocery).val();
      return newGrocery.toUpperCase();
    });
    newGroceriesArray.sort();
    newGroceriesArray.forEach(function(newGrocery) {
      $("#output").append("<li>" + newGrocery + "</li>");
    });
  });
});
