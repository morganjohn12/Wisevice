$(document).ready(function () {

	alert("hello");

    $('#login_form').validate({ // initialize the plugin

    	alert("hello");
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        }
    });

});