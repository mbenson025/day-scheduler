//global variables
var now = moment();

//current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

$(".jumbotron").append('<button class="darkBtn" style="float: left; background-color:black; color: white">Dark Mode</button>');


function timeColor () {
  var currentTime = now.hour();
  // console.log(currentTime);
  var hourRows = $('.description');
  console.log(hourRows.length);

    for (i=0; i < hourRows.length; i++) {

      if (parseInt(hourRows[i].id) < currentTime) {
        $(hourRows[i]).addClass('past');
      }
      if (parseInt(hourRows[i].id) === currentTime) {
        $(hourRows[i]).addClass('present');
      }
      if (parseInt(hourRows[i].id) > currentTime) {
        $(hourRows[i]).addClass('future');
    }
  }
}

timeColor();

//return from storage
  $("#time1 .description").val(localStorage.getItem("9"));
  $("#time2 .description").val(localStorage.getItem("10"));
  $("#time3 .description").val(localStorage.getItem("11"));
  $("#time4 .description").val(localStorage.getItem("12"));
  $("#time5 .description").val(localStorage.getItem("13"));
  $("#time6 .description").val(localStorage.getItem("14"));
  $("#time7 .description").val(localStorage.getItem("15"));
  $("#time8 .description").val(localStorage.getItem("16"));
  $("#time9 .description").val(localStorage.getItem("17"));


$('button').on('click', setSchedule);
//icon change
function setSchedule(e) {
  $(this).find('.fa').removeClass('fa-folder-plus').addClass('fa-check');
  //icon disappears after time duration
  setTimeout(() => {
    $(this).find('.fa').removeClass('fa-check').addClass('fa-folder-plus');
  }, 500);
    
    //save input to localStorage (key + value)
    let k = $(this).parent().children('textarea').attr('id'); //The whole family is here
    let v = $(this).parent().children('.description').val();

    localStorage.setItem(k, v);
  }

//toggle function alternate-
// function iconSwitch(e) {
//   $(this).find('.fa').toggleClass('fa-folder-plus fa-check');
// }

//clear button
var clearBtn = $(".clearBtn");
clearBtn.on("click", function() {
    localStorage.clear();
    location.reload();
});

//dark mode
var darkBtn = $(".darkBtn");
darkBtn.on("click", function() {
    $('body').toggleClass('dark');
    $('.jumbotron').toggleClass('dark');
});