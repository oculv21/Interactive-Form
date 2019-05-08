//first input field in focus
$('#name').focus();

//"Other" Job Role input field functionality
$('#other-input').hide();
$('#title').change(function () {
  if ( $(this).val() == 'other' ) {
    $('#other-input').show();
  } else {
    $('#other-input').hide();
  };
});

//Assign T-Shirt colors to theme
$('#design option[value="theme"]').prop('hidden', true)
$('#design').change(function () {
    if ( $(this).val() == 'js puns') {
        $('#color').find('.heart').hide();
        $('#color').find('.puns').show();
        $('#color option[value="cornflowerblue"]').prop('selected', true);
        $('#color option[value="tomato"]').prop('selected', false);
    } else {
        $('#color').find('.puns').toggle(false);
        $('#color').find('.heart').toggle(true);
        $('#color option[value="tomato"]').prop('selected', true);
        $('#color option[value="cornflowerblue"]').prop('selected', false);
    };
});

//activities section
const $totalDiv = $('<div></div>');
$('.activities').append($totalDiv);
let $totalCost = 0;
$('.activities').change((event) => {
  let $input = event.target;
  let $inputText = $input.parent().text();
  console.log($inputText);
});

