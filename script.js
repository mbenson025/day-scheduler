//global variables
var now = moment();

//current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));











//return from storage
  var a = $("#time1 .description").val(localStorage.getItem("9"));
  var b = $("#time2 .description").val(localStorage.getItem("10"));
  var c = $("#time3 .description").val(localStorage.getItem("11"));
  var d = $("#time4 .description").val(localStorage.getItem("12"));
  var e = $("#time5 .description").val(localStorage.getItem("13"));
  var f = $("#time6 .description").val(localStorage.getItem("14"));
  var g =  $("#time7 .description").val(localStorage.getItem("15"));
  var h = $("#time8 .description").val(localStorage.getItem("16"));
  var i = $("#time9 .description").val(localStorage.getItem("17"));


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