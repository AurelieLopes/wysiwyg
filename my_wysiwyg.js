$(document).ready(
  (function () {
    $.fn.my_wysiwyg = function (options) {
      var defaultButtons = [{
          type: 'bold',
          button: '<button class="bold" onclick="document.execCommand(\'bold\', false, \'\');">Bold</button>'
        },
        {
          type: 'italic',
          button: '<button class="italic" onclick="document.execCommand(\'italic\', false, \'\');">Italic</button>'
        },
        {
          type: 'strikethrough',
          button: '<button class="strikethrough" onclick="document.execCommand(\'strikeThrough\', false, \'\');">Strikethrough</button>'
        }
      ];

      // On cree la div avec contenteditable qui permettra de "simuler" un textarea
      var editor = $(this).after(
        '<div class="my_wysiwyg-editor textarea" contenteditable="true">' +
        $(this).val() +
        '</div>'
      );

      // On cache le textarea 'original'
      $(this).hide();

      function buttons(buttons) {
        // on cree une div ou on va inserer les buttons
        var buttonsWrapper = $(editor).before(
          '<div class="buttons-panel"></div>'
        );

        defaultButtons.forEach(function (item) {
          $('.buttons-panel').append(item.button);
        });
      }

      if (options.buttons) {
        buttons(options.buttons);
      } else {
        buttons();
      }
    };
  })(jQuery)
);