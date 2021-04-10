var count = 0;
$(document).ready(function () {
  $.getJSON("https://jsonplaceholder.typicode.com/todos", function (result) {
    result.forEach(function (it) {
      if (!it.completed) {
        $(
          '<div class="row text-center"><div class="col col-1">' +
            '<input type="checkbox">' +
            '</div><div class="col-md-auto">' +
            it.title +
            "</div>"
        ).appendTo("#task");
      }
    });
  });
  $("body").on("click", 'input[type="checkbox"]', function () {
    var task = $(this).parent().next();
    if (task.hasClass("strikeout")) {
      task.removeClass("strikeout");
      count--;
    } else {
      task.addClass("strikeout");
      count++;
    }
    if (count % 5 == 0)
      alert("Congrats. " + count + " Tasks have been Successfully Completed");
  });
});
