// Start JS for member change password
$(document).ready(function() {
  // Load footer
  $(".add-footer").load("./html/footer.html");
  $("#old-password").addClass("has-feedback");
  $(".icon-noti-old").addClass("glyphicon form-control-feedback");
  $("#new-password").addClass("has-feedback");
  $(".icon-noti-new").addClass("glyphicon form-control-feedback");
  $("#confirm-password").addClass("has-feedback");
  $(".icon-noti-confirm").addClass("glyphicon form-control-feedback");
});

function validationOldPW() {
  var old=document.getElementById('oldPassword').value;
  if (old.length < 6) {
    document.getElementById("notifi-old").innerHTML = "Mật khẩu ít nhất 6 ký tự!";
    $("#notifi-old").fadeIn();
    $("#old-password").removeClass("has-success");
    $(".icon-noti-old").removeClass("glyphicon-ok");
    $("#old-password").addClass("has-error");
    $(".icon-noti-old").addClass("glyphicon-remove");
    return false;

} else {
    $("#notifi-old").fadeOut();
    $("#old-password").removeClass("has-error");
    $(".icon-noti-old").removeClass("glyphicon-remove");
    $("#old-password").addClass("has-success");
    $(".icon-noti-old").addClass("glyphicon-ok");
    return true;
}

}
function validationNewPW() {
  var newPW =document.getElementById('newPassword').value;
  if (newPW.length < 6) {
    document.getElementById("notifi-new").innerHTML = "Mật khẩu ít nhất 6 ký tự!";
    $("#notifi-new").fadeIn();
    $("#new-password").removeClass("has-success");
    $(".icon-noti-new").removeClass("glyphicon-ok");
    $("#new-password").addClass("has-error");
    $(".icon-noti-new").addClass("glyphicon-remove");
    return false;

} else {
    $("#notifi-new").fadeOut();
    $("#new-password").removeClass("has-error");
    $(".icon-noti-new").removeClass("glyphicon-remove");
    $("#new-password").addClass("has-success");
    $(".icon-noti-new").addClass("glyphicon-ok");
    return true;
}
}

function validationConfirmPW() {
  var confirm=document.getElementById('confirmPassword').value;
  var newPwd=document.getElementById('newPassword').value;
  if (confirm.length < 6 || confirm !== newPwd) {
    document.getElementById("notifi-confirm").innerHTML = "Xác nhận mật khẩu mới sai!";
    $("#notifi-confirm").fadeIn();
    $("#confirm-password").removeClass("has-success");
    $(".icon-noti-confirm").removeClass("glyphicon-ok");
    $("#confirm-password").addClass("has-error");
    $(".icon-noti-confirm").addClass("glyphicon-remove");
    return false;

} else {
    $("#notifi-confirm").fadeOut();
    $("#confirm-password").removeClass("has-error");
    $(".icon-noti-confirm").removeClass("glyphicon-remove");
    $("#confirm-password").addClass("has-success");
    $(".icon-noti-confirm").addClass("glyphicon-ok");
    return true;
}
}
function onClickUpdate() {
  if(validationConfirmPW()===true&&validationNewPW()===true&&validationOldPW()===true){
    $('#notifi-failed').fadeOut();
    $("#btn-update").attr("data-target","#modal-success");
    return true;
  }
  else {
    $('#notifi-failed').fadeIn();
    $("#btn-update").attr("data-target","");
    return false;
  }
}
// Start JS for member change password
