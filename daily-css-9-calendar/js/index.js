$(document).ready(function() {

  var currentdate = new Date();
  var yr = currentdate.getYear();
  var mt = currentdate.getMonth();
  var md = currentdate.getDate();
  var wd = currentdate.getDay();
  var weekdays = new Array("Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat");
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var year = 1900 + yr;

$('#biglabel').append('<div id="monthyear">' + months[mt] + ' ' + year + '</div>');

  //this code gets the number of days in a month:
  if (mt == 1 && (yr % 4) == 0) {
    var lim = 29;
  } else if (mt == 1 && !((yr % 4) == 0)) {
    var lim = 28;
  } else if (mt <= 6 && (mt % 2) == 0) {
    var lim = 31;
  } else if (mt >= 7 & (mt % 2) == 1) {
    var lim = 31;
  } else {
    var lim = 30;
  }

  $('#wday').append('<div id="w' + md + '" class="day" style="left: ' + ((md) * 3.2) + 'em"><div id="dd' + wd + '" class="wdlabel">' + weekdays[wd] + '</div><div class="mday">' + md + '</div></div>');
  if (wd == 0 || wd == 6) {
    $('.wdlabel').css("color", "red");
  };

  for (var i = md + 1; i <= lim; i++) {

    var wd1 = (wd + (i - md) % 7) % 7;
    $('#wday').append('<div id="w' + i + '" class="day" style="left: ' + (((md) * 3.2) + (i - md) * 3.2) + 'em;"><div id="dd' + wd1 + '" class="wdlabel">' + weekdays[wd1] + '</div><div class="mday">' + i + '</div></div>');
  }

  for (var j = 1; j < md; j++) {

    var wd2 = (wd + 7 - (md - j) % 7) % 7;
    $('#wday').prepend('<div id="w' + j + '" class="day" style="left: ' + (((md) * 3.2) + (j - md) * 3.2) + 'em;"><div id="dd' + wd2 + '" class="wdlabel">' + weekdays[wd2] + '</div><div class="mday">' + j + '</div></div>');
  }

  var margin = $('#w' + md).css('left');
  $('#arrow').css('left', margin);

});