$(function() {
  $("body")
    .css("padding-top", "137px")
    .prepend(
    "<div id='ie6stop'>" +
      "<a href='#' class='cornerx' alt='Закрыть' title='Закрыть'></a>" +
      "<div class='browsers'>" +
        "<p><b>ВНИМАНИЕ!</b> Сайт может выглядеть некорректно.<br/> Причина этого &ndash; ваш <b>устаревший и небезопасный браузер</b>.<br/> Учтите, что это может стать причиной того, что ваша система может быть подвергнута атакам вредноностного кода<br/><b>Пожалуйста, обновите ваш браузер!</b></p>" +
        "<div class='links'>" +
          "<a href='http://www.mozilla.org/ru/firefox/fx/' class='firefox'>FireFox</a>" +
          "<a href='http://www.opera.com/browser/' class='opera'>Opera</a>" +
          "<a href='http://www.apple.com/ru/safari/download/' class='safari'>Safari</a>" +
          "<a href='http://www.google.com/chrome?hl=ru' class='chrome'>Google Chrome</a>" +
          "<a href='http://windows.microsoft.com/ru-RU/internet-explorer/downloads/ie' class='ie9'>Internet Explorer 9</a>" +
        "</div>" +
        "<div class='summary'>Если Вы не уверены, что сможете самостоятельно обновить интернет-браузер, обратитесь в службу IT-поддержки</div>" +
      "</div>" +
    "</div>");
  $("#ie6stop .cornerx").bind("click", function() {
    $("#ie6stop").remove();
    $("body").css("padding-top", "0");
    return false;
  });
});

