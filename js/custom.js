jQuery(document).ready(function () {
    $("#contactForm").submit(function(e) {

        var url = "http://35.187.200.225:3030/api/v1/contactus"; // the script where you handle the form input.

        var postData = {
            name: $("#name").val(),
            email: $("#email").val(),
            contact: $("#contact").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        };

        $.ajax({
            type: "POST",
            url: url,
            data: postData,
            beforeSend: function() {
                $("#response").empty();
            },
            success: function(data) {
                var successAlertDiv = '<div class="alert alert-success">Message sent successfully.</div>';
                $("#response").append(successAlertDiv);

                //remove error after 5 seconds
                setTimeout( function(){$('#response').empty();} , 5000);
            },
            error: function (error) {
                console.log(error);
                var errors = error.responseJSON.errors;
                var errorList = "";
                for (var key in errors) {
                    errorList = '<li>' + errors[key].message + '</li>';
                }
                var errorAlertDiv = '<div class="alert alert-danger"><ul>' + errorList + '</ul></div>';
                $("#response").append(errorAlertDiv);

                //remove error after 5 seconds
                setTimeout( function(){$('#response').empty();} , 5000);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    
    
    //call to partners submit
    $("#partnersForm").submit(function(e) {

        var url = "http://35.187.200.225:3030/api/v1/partners"; // the script where you handle the form input.

        var postData = {
            businessName: $("#businessName").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            email: $("#email").val(),
            contact: $("#contact").val(),
            address1: $("#address1").val(),
            address2: $("#address2").val(),
        };

        $.ajax({
            type: "POST",
            url: url,
            data: postData,
            beforeSend: function() {
                $("#response").empty();
            },
            success: function(data) {
                var successAlertDiv = '<div class="alert alert-success">We have received your details. We will get back to you shortly.</div>';
                $("#response").append(successAlertDiv);

                //remove error after 5 seconds
                setTimeout( function(){$('#response').empty();} , 5000);
            },
            error: function (error) {
                console.log(error);
                var errors = error.responseJSON.errors;
                var errorList = "";
                for (var key in errors) {
                    errorList = '<li>' + errors[key].message + '</li>';
                }
                var errorAlertDiv = '<div class="alert alert-danger"><ul>' + errorList + '</ul></div>';
                $("#response").append(errorAlertDiv);

                //remove error after 5 seconds
                setTimeout( function(){$('#response').empty();} , 5000);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});
