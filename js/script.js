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
$('#design').change(function () {
    if ( $(this).val() == 'js puns') {
        $('#color').find('.heart').toggle(false);
        $('#color').find('.puns').toggle(true);
    } else {
        $('#color').find('.puns').toggle(false);
        $('#color').find('.heart').toggle(true);
    };
});

