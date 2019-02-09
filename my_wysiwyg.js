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
    for(i = 1; i <= 10; i++) {
      var buttons = $('<button class="btn btn-primary" id=btn' + i + '></button>');
      $("body").append(buttons);
    }
  }
  buttons();

  function textArea() {
    var text = $("<textarea>");
    $("body").append(text);
  }
  textArea();
};
$("body").my_wysiwyg();
});
