/* global $ */
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(script);
script.onload = function () {
  $(document).ready(function () {
    $('.option:first').addClass('active');
    $(".option").on('click', function () {
      $(".option").removeClass("active");
      $(this).addClass("active");
    });
  });
};
