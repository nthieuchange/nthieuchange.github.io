jQuery(document).ready(function () {
    "use strict";
    var options = {};
    options.ui = {
        container: "#pwd-container",
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };
    $('#password').pwstrength(options);
    $('#confirm-password-status').text('');

    $('#confirm_password').on('keyup', function() {
        if (!$(this).val()) {
            $('#confirm-password-status').removeClass('text-success').addClass('text-danger').text('Nhập lại mật khẩu để xác nhận');
        } else {
            if ($(this).val() !== $('#password').val()) {
                $('#confirm-password-status').removeClass('text-success').addClass('text-danger').text('Mật khẩu không khớp');
            } else {
                $('#confirm-password-status').removeClass('text-danger').addClass('text-success').text('Mật khẩu khớp');
            }
        }
    });

    
});