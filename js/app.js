$('#country-select').change(function(){
  $(this).val();

  console.log($(this).val());
  console.log("si funciona");
  $('#lada-country').text("+" + $(this).val());
});

/* Función para validar que el teléfono tenga 10 dígitos */
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

var template = '<div class="swal-modal" role="dialog" aria-modal="true>'+
                  '<div class="swal-title" style>Tu código es</div>'+
                  '<div class="swal-footer">'+
                      '<div class="swal-button-container">'+
                          '<button class="swal-button swal-button--confirm">OK</button>'+
                        '<div class="swal-button__loader">'+
                          '<div></div>'+
                          '<div></div>'+
                          '<div></div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="swal-text" style>__LAB-__</div>'+
                  '</div>'+
                '</div>'+

/* Función para generar el número aleatorio de verificación */

function numVerification(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  console.log(Math.floor(Math.random() * (max - min)) + min);
}

/*numVerification(2,33);*/

$(document).ready(function(){
  setTimeout(() => ('welcome.html', 3000));

  $('#btn-next').click(getNumber);

  $('select').formSelect();
  
  $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    },
  });

});