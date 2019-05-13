const name = $('#name');
const email = $('#mail');
const activities = $('.activities input');
const creditCard = $('#cc-num');
const zipcode = $('#zip');
const cvv = $('#cvv');
const $nameError = $('<span>Name field must not be blank.</span>');
const $emailError = $('<span>Must contain valid email address.</span>');

//first input field in focus
$(name).focus();

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

//add total cost calculator to activites section
const $totalDiv = $('<div></div>');
$('.activities').append($totalDiv);
let $totalCost = 0;
$('.activities').change((event) => {
  let $input = event.target;
  let $cost = $($input).parent().text().slice(-3);
  $cost = parseInt($cost);
  if ( $(event.target).prop('checked') ) {
    $totalCost += $cost;
  } else {
    $totalCost -= $cost;
  };
  $totalDiv.text('Total: $' + $totalCost);
  //disables conflicting activities
  if ( $('.activities input').eq(1).prop('checked')) {
    $('.activities input').eq(3).prop('disabled', true);
  } else if ( $('.activities input').eq(3).prop('checked')) {
    $('.activities input').eq(1).prop('disabled', true);
  };
  if ( $('.activities input').eq(2).prop('checked')) {
    $('.activities input').eq(4).prop('disabled', true); 
  } else if ( $('.activities input').eq(4).prop('checked')) {
    $('.activities input').eq(2).prop('disabled', true); 
  };
});

//hides other payment options when one is selected
$('#payment option[value="select_method"]').prop('hidden', true);
$('#payment').change( function() {
  if ( $(this).val() == 'credit_card') {
    $('#credit-card').show();
    $('#paypal').hide();
    $('#bitcoin').hide();
  } else if ($(this).val() == 'paypal') {
    $('#paypal').show();
    $('#credit-card').hide();
    $('#bitcoin').hide();
  } else {
    $('#bitcoin').show();
    $('#paypal').hide();
    $('#credit-card').hide();
  };
});

//form validation
$(name).prev().append($nameError);
$($nameError).hide();
$(email).prev().append($emailError);
$($emailError).hide();

function isNameValid () {
  if  ($(name).val() !== '') {
    $(name).css('borderColor', '#c1deeb');
    $($nameError).hide();
    return true;
  } else {
    $(name).css('borderColor', 'red');
    $($nameError).show();
    return false;
  };
};

function isEmailValid () {
  if (/^[^@]+@\w+\.[a-z]+$/i.test($(email)) || $(email).val() !== '') {
    $(email).css('borderColor', '#c1deeb');
    $($emailError).hide();
    return true;
  } else {
    $(email).css('borderColor', 'red');
    $($emailError).show();
    return false;
  };
};

$('form').submit( function (event) {
  event.preventDefault();
  isNameValid();
  isEmailValid();
});
