// Código del lado del cliente (JavaScript/jQuery)
$(document).ready(function(){
  // Cuando se envía el formulario con el id "formulario-pago"
  $('#formulario-pago').submit(function(event){
    event.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario

    SendFormGoogleSheets(); // Llama a la función para enviar los datos a Google Sheets
  });
});

// Función para enviar los datos del formulario a Google Sheets usando AJAX
function SendFormGoogleSheets() {
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzzNkxO2FENHO_g5WAMlgFLrq6JfUsM8b2fX6ReUruvilyni3IkxWCQCdsz3bU4p1weBg/exec',
    type: 'post',
    data: $('#formulario-pago').serializeArray(), // Obtiene los datos del formulario
    success: function(){
      alert("Registro exitoso"); // Muestra una alerta si la solicitud es exitosa
    },
    error: function(){
      alert("Error en el Registro :("); // Muestra una alerta si hay un error en la solicitud
    }
  });
}
