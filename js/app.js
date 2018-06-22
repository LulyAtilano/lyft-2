function getNumber(){
  var phone = $('#textarea1').val();
  
  if (phone.length == 0 || phone.length <= 9 || phone.length > 10) {
    $('#btn-next').addClass("disabled");
    console.log("menos de 9");
    swal("Ooooops!", "Ingresa por favor un número de 10 dígitos", "error");
  } else if (phone.length == 10) {
    $('#btn-next').removeClass("disabled");
    console.log("son 10");
    swal("Tu código es", "LAB-____");
  }

  $('#textarea1').val('');
  
}

$(document).ready(function(){
  setTimeout(() => ('welcome.html', 3000));

  $('#btn-next').click(getNumber);

  $('.dropdown-trigger').dropdown();
    
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  });
  
  $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    },
  });

});