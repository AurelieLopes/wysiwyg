$(document).ready(function() {


(function($) {

  $.fn.my_wysiwyg = function() {

    function buttons() {
      var row = $('<div class="row">');
      var col12 = $('<div class="col-md-12 text-center">');
      $("body").append(row);
      $(".row").append(col12);

      for (i = 1; i <= 10; i++) {
        var buttons = $('<button class="btn btn-outline-dark mt-3 mb-5" id=btn' + i + '></button>');
        $(col12).append(buttons);
      }
<<<<<<< HEAD
my_wysiwyg();
});
});*/


jQuery.fn.my_wysiwyg = function() {
  function buttons() {
    var row = $('<div class="row">');
    var col12 = $('<div class="col-md-12 text-center">');
    $("body").append(row);
    $(".row").append(col12);
    for(i = 1; i <= 10; i++) {
      var buttons = $('<button class="btn btn-primary mt-3 mb-5" id=btn' + i + '>hehe</button>');
      $(".col-md-12").append(buttons);
=======

      $("#btn1").html("<strong>B</strong>");
      $("#btn1").click(function() {
        $("#btn1").attr("class", "btn btn-outline-dark mt-3 mb-5 active");
        console.log("Hello");

        if ($("#btn1").hasClass("btn btn-outline-dark mt-3 mb-5 active")) {
        $("textarea").toggleClass("bold");
        $(".bold").css("font-weight", "bold");
        $("textarea").hasClass("bold")?$("textarea").val("bold"):$("textarea").val("normal");
        }

      })
      $("#btn2").html("<i>I</i>");
      $("#btn3").html("<del>LOL</del>");
      $("#btn4").html("FS");
      $("#btn5").html("C");
      $("#btn6").html("Link");
      $("#btn7").html("Link");
>>>>>>> 506ce6d14ca3046d67c627b2464fa17f0da813df
    }
    buttons();

    function textArea() {
      var text = $("<textarea rows='20' cols='100'>");
      $("body").append(text);
    }
    textArea();
  };

}(jQuery));
$("body").my_wysiwyg();
});
