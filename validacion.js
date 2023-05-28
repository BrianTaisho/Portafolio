//Haz tú validación en javascript acá
const formulario = document.forms['form'];

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const nombre = formulario.elements['nombre'].value.trim();
  const email = formulario.elements['email'].value.trim();
  const asunto = formulario.elements['asunto'].value.trim();
  const mensaje = formulario.elements['mensaje'].value.trim();

  // Validación del campo de nombre
  if (nombre === '') {
    alert('Por favor, ingresa tu nombre.');
    return;
  }

  // Validación del campo de email
  if (email === '') {
    alert('Por favor, ingresa tu dirección de correo electrónico.');
    return;
  }

  // Validación del campo de asunto
  if (asunto === '') {
    alert('Por favor, ingresa el asunto del mensaje.');
    return;
  }

  // Validación del campo de mensaje
  if (mensaje === '') {
    alert('Por favor, ingresa tu mensaje.');
    return;
  }

  // Si todos los campos son válidos, puedes enviar el formulario
  alert('¡Formulario enviado con éxito!');
  formulario.reset(); // Opcional: restablece el formulario después de enviarlo
});
