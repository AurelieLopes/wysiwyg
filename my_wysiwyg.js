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


jQuery.fn.my_wysiwyg = function() 
{
  function buttons() {
    for(i = 1; i <= 10; i++) {
      var buttons = $('<button class="btn btn-primary" >hehe</button>');
      $('body').append(buttons);
    }
  }
  buttons();
};
$("body").my_wysiwyg();
});