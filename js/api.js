$(document).ready(function(){

    $("#form").submit(function(event) {

    event.preventDefault();
    $.ajax({
      url: 'http://35.187.200.225:3030/api/v1/partners/',
      type: 'POST',
        data : {
            'businessName': $("#businessName").val(),
            'name': $("#name").val(),
            'category': $("#category").val(),
            'email': $("#email").val(),
            'contact': $("#contact").val(),
            'address1': $("#address1").val()
      },
      dataType : 'json',

      success: function(result)
      {
        $('#msgs').html("<div class='alert alert-success'>Summited</div>");
         //alert('Thank You');
        console.log(result);

      },
      error: function(xhr, resp, text)  {
         $('#msgs').html("<div class='alert alert-danger'>Please Check your Inputs</div>");
        //alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
        console.log(xhr, resp, text);

      }

    });
  });
});


// $(document).ready(function() {
//     $("#form").submit(function(event) {
//         event.preventDefault();
//         $.ajax({
//             url: 'http://35.187.200.225:3030/api/v1/partners/', // url where to submit the request
//             type : "POST", // type of action POST || GET
//             dataType : 'json', // data type
            // data : {
            //     'businessName': $("#businessName").val(),
            //     'name': $("#name").val(),
            //     'category': $("#category").val(),
            //     'email': $("#email").val(),
            //     'contact': $("#contact").val(),
            //     'address1': $("#address1").val()
//             }, // post data || get data
//             success : function(result) {
//                 alert('success');
//                 // tab of the developer tools
//                 console.log(result);
//             },
//             error: function(xhr, resp, text) {
//                 console.log(xhr, resp, text);
//             }
//         })
//     });
// });
