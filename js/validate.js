$(document).ready(function() {
  jQuery.validator.addMethod("alphanumericwithspace", function(value, element) {
  	return this.optional(element) || /^[a-z\s0-9\_]+$/i.test(value);
  }, "Letters, numbers, space and underscores only please");

  jQuery.validator.addMethod("lettersonly", function(value, element)
  {
  return this.optional(element) || /^[a-z ]+$/i.test(value);
  }, "Letters and spaces only please");

  $("#form").validate({
    rules:{
      email:{
        required:true,
        email:true
      },
      contact:{
        required:true,
        number:true,
      },
      name:{
        required:true,
        lettersonly:true
      },
      subject:{
        required:true,
        lettersonly:true
      },
      businessName:{
        required:true,
        alphanumericwithspace:true
      },

      others: {

        required: {
          depends:function () {
            return $('#category').val()== "6";

          }
        }

      },

      category:{
        required: true
      },
      message1:{
        required: true
      },
      address1:{
        required: true
      }


    },
    message:{
      email:{
        required: 'Please Enter Your Email.',
        email:'Please Enter a <em>Valid</em> Email'
      },
      cell:{
        minlength: 'Please enter 10 Digit Number'
      }
    }
  });

})
