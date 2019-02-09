jQuery.fn.my_wysiwyg = function() 
{
	function buttons() {
		for(i = 1; i <= 10; i++) {
			var buttons = $('<input type="button">');
			$('body').append(buttons);
		}
	}
	buttons();
};
 $(function() {
 	$("body").my_wysiwyg();
 }); 