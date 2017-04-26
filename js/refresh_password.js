// Start refresh password
$(document).ready(function() {
  // Load footer
  $(".add-footer").load("./footer.html");
  $("#reset-newPassword").password({
    animate: false
  });
  $("#reset-new-password").addClass("has-feedback");
  $(".icon-noti-new-reset").addClass("glyphicon form-control-feedback");
  $("#reset-confirm-password").addClass("has-feedback");
  $(".icon-noti-confirm-reset").addClass("glyphicon form-control-feedback");
});
function validationResetNewPW() {
  var newPW =document.getElementById('reset-newPassword').value;
  if (newPW.length < 6) {
    document.getElementById("notifi-new-reset").innerHTML = "Mật khẩu ít nhất 6 ký tự!";
    $("#reset-new-password").removeClass("has-success");
    $(".icon-noti-new-reset").removeClass("glyphicon-ok");
    $("#reset-new-password").addClass("has-error");
    $(".icon-noti-new-reset").addClass("glyphicon-remove");
    return false;

} else {
    $("#reset-new-password").removeClass("has-error");
    $(".icon-noti-new-reset").removeClass("glyphicon-remove");
    $("#reset-new-password").addClass("has-success");
    $(".icon-noti-new-reset").addClass("glyphicon-ok");
    return true;
}
}

function validationResetConfirmPW() {
  var confirm=document.getElementById('reset-confirmPassword').value;
  var newPwd=document.getElementById('reset-newPassword').value;
  if (confirm.length < 6 || confirm !== newPwd) {
    document.getElementById("notifi-confirm-reset").innerHTML = "Xác nhận mật khẩu mới sai!";
    $("#notifi-confirm-reset").fadeIn();
    $("#reset-confirm-password").removeClass("has-success");
    $(".icon-noti-confirm-reset").removeClass("glyphicon-ok");
    $("#reset-confirm-password").addClass("has-error");
    $(".icon-noti-confirm-reset").addClass("glyphicon-remove");
    return false;

} else {
    //document.getElementById("notifi-confirm").innerHTML = "Xác nhận mật khẩu mới đúng";
    $("#notifi-confirm-reset").fadeOut();
    $("#reset-confirm-password").removeClass("has-error");
    $(".icon-noti-confirm-reset").removeClass("glyphicon-remove");
    $("#reset-confirm-password").addClass("has-success");
    $(".icon-noti-confirm-reset").addClass("glyphicon-ok");
    return true;
}
}
function onClickConfirm() {
  if(validationResetConfirmPW()===true&&validationResetNewPW()===true){
    $('#notifi-failed-reset').fadeOut();
    $("#btn-confirm-reset").attr("data-target","#modal-reset-success");
    return true;
  }
  else {
    $('#notifi-failed-reset').fadeIn();
    $("#btn-confirm-reset").attr("data-target","");
    return false;
  }
}

// Password Strength animation
;(function($) {
  'use strict';

  var Password = function ($object, options) {
    var defaults = {
      shortPass: 'Mật khẩu quá ngắn.',
      badPass: 'Mật khẩu Yếu.',
      goodPass: 'Mật khẩu Trung bình.',
      strongPass: 'Mật khẩu Mạnh.',
      enterPass: 'Nhập mật khẩu của bạn',
      showText: true,
      animate: true,
      animateSpeed: 'fast',
      minimumLength: 6
    };

    options = $.extend({}, defaults, options);

    function scoreText(score) {
      if (score === -1) {
        $(".pass-text").removeClass("pwd-right");
        $(".pass-text").addClass("pwd-wrong");
        return options.shortPass;
      }

      score = score < 0 ? 0 : score;
      $(".pass-text").removeClass("pwd-wrong");
      $(".pass-text").addClass("pwd-right");
      if (score < 40) {
        //$(".pass-text").removeClass("pwd-wrong");

        return options.badPass;
      }
      if (score < 70) {

        return options.goodPass;
      }
      return options.strongPass;
    }

    function calculateScore(password, username) {
      var score = 0;

      // password < options.minimumLength
      if (password.length < options.minimumLength) {
        return -1;
      }

      // password length
      score += password.length * 5;
      score += checkRepetition(1, password).length - password.length;
      score += checkRepetition(2, password).length - password.length;
      score += checkRepetition(3, password).length - password.length;
      score += checkRepetition(4, password).length - password.length;

      // password has 3 numbers
      if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
        score += 5;
      }

      // password has at least 2 sybols
      var symbols = '.*[!,@,#,$,%,^,&,*,?,_,~]';
      symbols = new RegExp('(' + symbols + symbols + ')');
      if (password.match(symbols)) {
        score += 5;
      }

      // password has Upper and Lower chars
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        score += 10;
      }

      // password has number and chars
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        score += 15;
      }

      // password has number and symbol
      if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
        score += 15;
      }

      // password has char and symbol
      if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
        score += 15;
      }

      // password is just numbers or chars
      if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
        score -= 10;
      }

      if (score > 100) {
        score = 100;
      }

      if (score < 0) {
        score = 0;
      }

      return score;
    }

    function checkRepetition(rLen, str) {
      var res = "", repeated = false;
      for (var i = 0; i < str.length; i++) {
        repeated = true;
        for (var j = 0; j < rLen && (j + i + rLen) < str.length; j++) {
          repeated = repeated && (str.charAt(j + i) === str.charAt(j + i + rLen));
        }
        if (j < rLen) {
          repeated = false;
        }
        if (repeated) {
          i += rLen - 1;
          repeated = false;
        }
        else {
          res += str.charAt(i);
        }
      }
      return res;
    }

    function init() {
      var shown = true;
      var $text = options.showText;
      var $percentage = options.showPercent;
      var $graybar = $('<div>').addClass('pass-graybar');
      var $colorbar = $('<div>').addClass('pass-colorbar');
      var $insert = $('<div>').addClass('pass-wrapper').append(
        $graybar.append($colorbar)
      );

      $object.parent().addClass('pass-strength-visible');
      if (options.animate) {
        $insert.css('display', 'none');
        shown = false;
        $object.parent().removeClass('pass-strength-visible');
      }

      if (options.showPercent) {
        $percentage = $('<span>').addClass('pass-percent').text('0%');
        $insert.append($percentage);
      }

      if (options.showText) {
        $text = $('<span>').addClass('pass-text').html(options.enterPass);
        $insert.append($text);
      }

      $object.after($insert);

      $object.keyup(function() {
        var username = options.username || '';
        if (username) {
          username = $(username).val();
        }

        var score = calculateScore($object.val(), username);
        $object.trigger('password.score', [score]);
        var perc = score < 0 ? 0 : score;
        $colorbar.css({
          backgroundPosition: "0px -" + perc + "px",
          width: perc + '%'
        });

        if (options.showPercent) {
          $percentage.html(perc + '%');
        }

        if (options.showText) {
          var text = scoreText(score);
          if (!$object.val().length && score <= 0) {
            text = options.enterPass;
          }

          if ($text.html() !== $('<div>').html(text).html()) {
            $text.html(text);
            $object.trigger('password.text', [text, score]);
          }
        }
      });

      if (options.animate) {
        $object.focus(function() {
          if (!shown) {
            $insert.slideDown(options.animateSpeed, function () {
              shown = true;
              $object.parent().addClass('pass-strength-visible');
            });
          }
        });

        $object.blur(function() {
          if (!$object.val().length && shown) {
            $insert.slideUp(options.animateSpeed, function () {
              shown = false;
              $object.parent().removeClass('pass-strength-visible')
            });
          }
        });
      }

      return this;
    }

    return init.call(this);
  }

  // Bind to jquery
  $.fn.password = function(options) {
    return this.each(function() {
      new Password($(this), options);
    });
  };
})(jQuery);
// End refresh password
