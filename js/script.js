const name = $('#name');
const email = $('#mail');
const activities = $('.activities input');
const creditCard = $('#cc-num');
const zipcode = $('#zip');
const cvv = $('#cvv');
const $nameError = $('<span>Name field must not be blank.</span>');
const $emailError = $('<span>Must contain valid email address.</span>');
const $activitiesError = $('<span>Please select at least one activity.</span>');
const $creditCardError = $('<span>Please provide a valid credit card number.</span>');
const $zipcodeError = $('<span>Please provide a valid zipcode.</span>');
const $cvvError = $('<span>Please provide a valid CVV.</span>');

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

//append and hide error messages
$(name).prev().append($nameError);
$($nameError).hide();
$(email).prev().append($emailError);
$($emailError).hide();
$('.activities legend').append($activitiesError);
$($activitiesError).hide();
$(creditCard).prev().append($creditCardError);
$($creditCardError).hide();
$(zipcode).prev().append($zipcodeError);
$($zipcodeError).hide();
$(cvv).prev().append($cvvError);
$($cvvError).hide();

//form validation functions
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
  if (/^[^@]+@\w+\.[a-z]+$/i.test($(email).val()) || $(email).val() !== '') {
    $(email).css('borderColor', '#c1deeb');
    $($emailError).hide();
    return true;
  } else {
    $(email).css('borderColor', 'red');
    $($emailError).show();
    return false;
  };
};

function activitiesSelected () {
  let checked = 0;
  $(activities).each( function () {
    if ($(this).prop('checked')) {
      checked += 1;
    };
  });
  if (checked > 0) {
    $($activitiesError).hide();
    return true;
  } else {
    $($activitiesError).show();
    return false;
  };
};

function creditCardValid () {
  if (/^\d{13,16}$/.test($(creditCard).val())) {
    $($creditCardError).hide();
    return true;
  } else {
    $($creditCardError).show();
    return false;
  };
};

function zipcodeValid () {
  if (/^\d{5}$/.test($(zipcode).val())) {
    $($zipcodeError).hide();
    return true;
  } else {
    $($zipcodeError).show();
    return false;
  };
};

function cvvValid () {
  if (/^\d{3}$/.test($(cvv).val())) {
    $($cvvError).hide();
    return true;
  } else {
    $($cvvError).show();
    return false;
  };
};

$('form').submit( function (event) {
  event.preventDefault();
  let results = [];
  results.push(isNameValid());
  results.push(isEmailValid());
  results.push(activitiesSelected());
  if ($('#payment option[value="credit_card"]').prop('selected')) {
    results.push(creditCardValid());
    results.push(zipcodeValid());
    results.push(cvvValid());
  };
  console.log(results);
});
