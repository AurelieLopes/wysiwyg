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
        },
        {
          type: 'link',
          button: '<button class="link" onclick="document.execCommand(\'createLink\', false, \'href=\');">Link</button>'
        },
        {
          type: 'fontsize',
          button: '<select id="fontsize">Font size<option value="increase" onclick="document.execCommand(\'fontSize\', false, \'1\');">1</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'2\');">2</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'3\');">3</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'4\');">4</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'5\');">5</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'6\');">6</option><option value="increase" onclick="document.execCommand(\'fontSize\', false, \'7\');">7</option></select>'
        },
        {
          type: 'left',
          button: '<button class="left" onclick="document.execCommand(\'justifyLeft\', false, \'\');">Align left</button>'
        },
        {
          type: 'right',
          button: '<button class="right" onclick="document.execCommand(\'justifyRight\', false, \'\');">Align right</button>'
        },
        {
          type: 'center',
          button: '<button class="center" onclick="document.execCommand(\'justifyCenter\', false, \'\');">Center</button>'
        },
        {
          type: 'justify',
          button: '<button class="justify" onclick="document.execCommand(\'justifyFull\', false, \'\');">Justify</button>'
        },
        {
          type: 'indent',
          button: '<button class="indent" onclick="document.execCommand(\'indent\', false, \'\');">Indent</button>'
        },
        {
          type: 'outdent',
          button: '<button class="outdent" onclick="document.execCommand(\'outdent\', false, \'\');">Outdent</button>'
        },
        {
          type: 'selectcolor',
          button: '<select id="selectcolor"><option value="blue" onclick="document.execCommand(\'foreColor\', false, \'#5998ff\');">Blue</option><option value="purple" onclick="document.execCommand(\'foreColor\', false, \'#a20dc4\');">Purple</option><option value="pink" onclick="document.execCommand(\'foreColor\', false, \'#ff68b6\');">Pink</option>><option value="red" onclick="document.execCommand(\'foreColor\', false, \'#db0015\');">Red</option><option value="orange" onclick="document.execCommand(\'foreColor\', false, \'#ff7b00\');">Orange</option><option value="yellow" onclick="document.execCommand(\'foreColor\', false, \'#ffd932\');">Yellow</option><option value="green" onclick="document.execCommand(\'foreColor\', false, \'#4caf16\');">Green</option><option value="black" onclick="document.execCommand(\'foreColor\', false, \'black\');">Black</option><select>'
        },
      ];

      // On cree la div avec contenteditable qui permettra de "simuler" un textarea
      var editor = $(this).after(
        '<div class="my_wysiwyg-editor textarea" contenteditable="true">' +
        $(this).val() +
        '</div>'
      );

      $(".my_wysiwyg-editor").css({
        "display": "block",
        "margin-right": "auto",
        "margin-left": "auto",
        "height": "500px",
        "width": "70%",
        "border": "1px solid",
        "-moz-appearance": "textfield-multiline",
        "-webkit-appearance": "textarea",
        "border": "1px solid gray",
        "font": "medium -moz-fixed",
        "font": "-webkit-small-control",
        "overflow": "auto",
        "resize": "both"
      });

      // On cache le textarea 'original'
      $(this).hide();

      function buttons(buttons) {
        // on cree une div ou on va inserer les buttons
        var buttonsWrapper = $(editor).before(
          '<div class="buttons-panel"></div>'
        );

        $(".buttons-panel").css({
          "display": "table",
          "margin-left": "auto",
          "margin-right": "auto",
          "margin-bottom": "20px",
          "margin-top": "20px"
        });

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
