$("form").on("submit", function (event) {
  if (
    !($("#inputUser").val() == "admin" && $("#inputPassword").val() == "12345")
  ) {
    event.preventDefault();
    $("#inputUser").addClass("is-invalid");
    $("#inputPassword").addClass("is-invalid");
  }
});
