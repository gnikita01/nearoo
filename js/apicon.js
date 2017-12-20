$(document).ready(function(){

    $("#form").submit(function(event) {

    event.preventDefault();
    $.ajax({
      url: 'http://35.187.200.225:3030/api/v1/contactus/',
      type: 'POST',
        data : {
            'Name': $("#name").val(),
            'email': $("#email").val(),
            'contact': $("#contact").val(),
            'subject': $("#subject").val(),
            'message': $("#message1").val()
      },
      dataType : 'json',

      success: function(result)
      {
        //alert('Thank You');
        $('#msgs').html("<div class='alert alert-success'>Summited</div>");
        console.log(result);
      },
      error: function(xhr, resp, text)  {
        $('#msgs').html("<div class='alert alert-danger'>Please Check your Inputs</div>");
        //alert('failed');
        console.log(xhr, resp, text);
      }

    });
  });
});
