$(document).ready(function() {

/*  (function($) {
      $.fn.my_wysiwyg = function() {

        function buttons() {
          for(i = 1; i <= 10; i++) {
            var buttons = $('<input type="button">');
            $('body').append(buttons);
          }
        }
        buttons();
      }
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
      var buttons = $('<button class="btn btn-primary" id=btn' + i + '>hehe</button>');
      $(".col-md-12").append(buttons);
    }
  }
  buttons();

  function textArea() {
    var text = $("<textarea rows='20' cols='100'>");
    $("body").append(text);
  }
  textArea();
};
$("body").my_wysiwyg();
});
