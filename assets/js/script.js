$(document).ready(function () {
  $(".navbar .nav-link,.navbar-brand,.jumbotron a").click(function (e) {
    let href = $(this).attr("href");
    $("html").animate({
      scrollTop: $(href).offset().top - 56
    });
    e.preventDefault();
  });
  $("a[href='#']").click(function (e) {
    e.preventDefault();
  });
});
