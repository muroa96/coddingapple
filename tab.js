var buttonSelector = $('.tab-button');
var contentSelector = $('.tab-content');

// for (let i = 0; i<$('.tab-button').length; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//   });
// }

function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').eq(숫자).addClass('show');
}


$('.list').click(function (e) {
  탭열기(e.target.dataset.id)
});