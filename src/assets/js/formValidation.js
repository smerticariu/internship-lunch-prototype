var formValidation = (function(){
  var $profileForm = $('.profileformjs');
  var $input = $('.form__input[type="text"]');
  var $notification = $('.form__notification');

    $input.on("focusout", function() {
      if($(this).val() == ""){
        $(this).addClass("danger").removeClass("success");
      }
      else {
        $(this).removeClass("danger").addClass("success");
      }
    });
// Validate user profile form
    $profileForm.validate({
        rules: {
            name: {
                required: true
            },
            email: {
              required: true,
              email: true
            },
            phone: {
              required: true,
              minlength:10,
              maxlength:10
            },
            address: {
              required: true
            }
        },
        messages: {
            name: "Name required",
            email: "E-mail required",
            phone: "Phone required",
            address: "Address required"
        },

        submitHandler: function($profileForm) {
            $notification.html("An email confirmation has been sent");
            return false;
        }
    });

  // Validate Add menu form

  var $menuForm = $('.menuformjs');

  $menuForm.validate({
        rules: {
            title: {
                required: true
            },
            date: {
              required: true,
              date: true
            },
            dish1: {
              required: true
            },
            dish2: {
              required: true
            },
            dish3: {
              required: true
            }
        },
        messages: {
            title: "Required field",
            date: "Required field",
            dish1: "Required field",
            dish2: "Required field",
            dish3: "Required field"
        },

        submitHandler: function($menuForm) {
            return false;
        }
    });

  });




formValidation();

