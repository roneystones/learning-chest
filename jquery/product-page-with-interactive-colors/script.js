$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});


// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.color-choose input').addEventListener('click', function(event) {
//     var headphonesColor = event.target.getAttribute('data-image');
//
//     document.querySelector('.active').classList.remove('active');
//     document.querySelector('.left-column img[data-image = ' + headphonesColor + ']').classList.add('active');
//     event.target.classList.add('active');
//   });
// });
