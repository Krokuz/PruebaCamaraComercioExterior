var socket = io();
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');
var nicknameInput = document.getElementById('nickname');
var enviarBtn = document.getElementById('enviarBtn');

var typing = false;
var timeout = undefined;

//Función para habilitar o deshabilitar el campo de entrada y el botón de enviar.
function toggleInputs() {
    if (nicknameInput.value.trim() !== '') {
        input.disabled = false;
        enviarBtn.disabled = false;
    } else {
        input.disabled = true;
        enviarBtn.disabled = true;
    }
}

//Evento para el campo de apodo.
nicknameInput.addEventListener('input', toggleInputs);

//Evento para el input. 
input.addEventListener('input', function() {
    clearTimeout(timeout);
    if (!typing) {
        typing = true;
        socket.emit('typing', { nickname: nicknameInput.value });
    }
    timeout = setTimeout(function() {
        typing = false;
        socket.emit('stop typing', { nickname: nicknameInput.value });
    }, 2000);
});

//Evento para el formulario.
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        var message = input.value;
        var nickname = nicknameInput.value;
        socket.emit('chat message', { message: message, nickname: nickname });
        input.value = '';
    }
});

//Se maneja el evento para recibir mensajes 
socket.on('chat message', function (data) {
    var item = document.createElement('li');
    item.textContent = data.nickname + ': ' + data.message;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

//Se maneja el evento para recibir un mensaje cuando un usuario está escribiendo.
socket.on('user typing', function(data) {
    var typingMessage = document.createElement('li');
    typingMessage.textContent = data.nickname + ' está escribiendo...';
    messages.appendChild(typingMessage);
    window.scrollTo(0, document.body.scrollHeight);
});

//Se maneja el evento para recibir un mensaje cuando un usuario deja de escribir.
socket.on('user stop typing', function(data) {
    var typingMessages = document.querySelectorAll('#messages li');
    typingMessages.forEach(function(element) {
        if (element.textContent === data.nickname + ' está escribiendo...') {
            element.remove();
        }
    });
});

// Llamamos a la función para habilitar o deshabilitar los campos al cargar la página
toggleInputs();
