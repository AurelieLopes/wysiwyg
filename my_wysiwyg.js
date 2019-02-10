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
          button: '<select id="fontsize" onchange="changeSize()"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option></select>'
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
          button: '<select id="selectcolor" onchange="selectColor()"><option value="#5998ff">Blue</option><option value="#a20dc4">Purple</option><option value="#ff68b6">Pink</option>><option value="#db0015">Red</option><option value="#ff7b00">Orange</option><option value="#ffd932">Yellow</option><option value="#4caf16">Green</option><option value="black">Black</option><select>'
        },
      ];

      var options = {
          option1: "bold",
          option2: "italic",
          option3: "strikethrough",
          option4: "link",
          option5: "fontsize",
          option6: "left",
          option7: "right",
          option8: "center",
          option9: "justify",
          option10: "indent",
          option11: "outdent",
          option12: "selectcolor"
      }
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


        if(options.buttons && options.buttons.length) {
          defaultButtons.forEach(function(item) {
            if(options.buttons.indexOf(item.type) > -1) {
              $('.buttons-panel').append(item.button);
            }
          });
        } else {
            defaultButtons.forEach(function(item) {
              $('.buttons-panel').append(item.button);
            });
          }

        }
        buttons();

      $('#fontsize').change(function changeSize() {
        document.execCommand('fontSize', false, this.value);
      });

      $('#selectcolor').change(function selectColor() {
        document.execCommand('foreColor', false, this.value);
      });

    };
  })(jQuery)
);
