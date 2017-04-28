/**
 * Created on April 27, 2017.
 */
$(document).ready(function(){
    $('.credit-packages input[type=radio]').on('click', function() {
        $('#pay-money').val($(this).val() * 1000);
    });
});