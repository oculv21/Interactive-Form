//first input field in focus
$('#name').focus();

//"Other" Job Role input field
$('#other-title').hide();
$('#title').change(function () {
  if ( $(this).val() == 'other' ) {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  };
});

//Assign T-Shirt colors to theme
const punsTshirt = $('#design option[value="js puns"]');
const heartTshirt = $('#design option[value="heart js"]');



