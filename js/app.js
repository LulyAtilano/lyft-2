/* Función para poner la lada según el país */
$('#country-select').change(function(){
  $(this).val();

  console.log($(this).val());
  console.log("si funciona");
  $('#lada-country').text("+" + $(this).val());
});

/* Validando 10 caracteres */
$('#textarea1').keyup(function(){
  var phone = $(this).val();
  if (phone.length == 10) {
    $('#btn-next').removeClass("disabled");
  } else {
    $('#btn-next').addClass("disabled");
  }

});

/* Función para generar clave aleatoria  */
function getNumber(){
  var numSucess = numVerification();
  swal("Tu código es", "LAB-" + numSucess).then(function(){
    window.location = "verify.html?"+ numSucess;
  });
}

/* Función validar input */
function validateInput () {
  var recoverCode = window.location.search.substr(1);
}

/*
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
                '</div>'+ */

/* Función para mostar num en la modal 
function showNumber (num) {

  var templateModal = "";
  templateModal = template.replace("__LAB-__", "LAB-" + num);
} */

/* Función para generar el número aleatorio de verificación */
function numVerification() {
  var newnumber = [];

  for ( var i = 0; i < 3; i++) {
    var codeAscci = Math.floor(Math.random()* (57-48) + 48);
    var stringCodeAscci = String.fromCharCode(codeAscci);
    newnumber += stringCodeAscci;
  }
  return newnumber;
}

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