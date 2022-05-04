//global variables
var now = moment();


//current day and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// var hour = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];


//functions

//return from storage
function getSchedule() {
  // localStorage.getItem(k);
  // $(this)
}


// $('.description').val(localStorage.description);

$('button').on('click', saveSchedule);
//icon change
function setSchedule(e) {
  $(this).find('.fa').removeClass('fa-folder-plus').addClass('fa-check');
  //icon disappears after time duration
  setTimeout(() => {
    $(this).find('.fa').removeClass('fa-check').addClass('fa-folder-plus');
  }, 500);
    
    //save input to localStorage (key + value)
    let k = $(this).parent().children('textarea').attr('id');
    let v = $(this).parent().children('.description').val();


    localStorage.setItem(k, v);
  
}



//toggle function alternate-
// function iconSwitch(e) {
//   $(this).find('.fa').toggleClass('fa-folder-plus fa-check');
// }