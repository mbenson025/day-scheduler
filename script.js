//global variables
var now = moment();


//current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));




//functions











$('button').on('click', iconEffect);

function iconEffect(e) {
  $(this).find('.fa').removeClass('fa-folder-plus').addClass('fa-check');
  setTimeout(() => {
    $(this).find('.fa').removeClass('fa-check').addClass('fa-folder-plus');
  }, 500);
}


//toggle function alternate-
// function iconSwitch(e) {
//   $(this).find('.fa').toggleClass('fa-unlock-alt fa-lock');
// }