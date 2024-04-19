document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault();
    enviarMensaje();
});

function enviarMensaje() {
    var mensajeInput = document.getElementById('mensaje').value;

    // Se valida si el mensaje está vacío para salir de la función.
    if (!mensajeInput.trim()) {
        mostrarMensajeError('El mensaje está vacío. Ingrese, un mensaje válido.');
        return;
    }

    //Se crea una solicitud XMLHttpRequest para enviar el mensaje al servidor.
    var request = new XMLHttpRequest();
    request.open('POST', 'curl-prueba.php', true);
    //Indicamos que se está enviando datos codificados como formulario.
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                mostrarMensajeEnviado(request.responseText);
                document.getElementById('mensaje').value = '';
            } else {
                console.error('Error al enviar mensaje:', request.status);
            }
        }
    };
    request.send('mensaje=' + encodeURIComponent(mensajeInput));
}

function mostrarMensajeError(mensaje) {
    var mensajeErrorDiv = document.getElementById('mensajeError');
    mensajeErrorDiv.innerText = mensaje;
    mensajeErrorDiv.style.display = 'block';
    mensajeErrorDiv.style.color = 'red';
    setTimeout(function () {
        mensajeErrorDiv.style.display = 'none';
    }, 2500);
}

function mostrarMensajeEnviado(mensaje) {
    var mensajeEnviadoDiv = document.getElementById('mensajeEnviado');
    mensajeEnviadoDiv.innerText = mensaje;
    mensajeEnviadoDiv.style.display = 'block';
    mensajeEnviadoDiv.style.color = '#31603D';
    
    setTimeout(function () {
        mensajeEnviadoDiv.style.display = 'none';
    }, 3000);
}