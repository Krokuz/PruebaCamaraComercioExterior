const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

//Middleware para emplear archivos CSS y JS desde sus respectivas carpetas.
app.use('/css', express.static(process.cwd() + '/client/css'));
app.use('/js', express.static(process.cwd() + '/client/js'));

//Middleware para analizar datos JSON.
app.use(express.json());

// Endpoint HTTP para recibir mensajes POST.
app.post('/send-message', (req, res) => {
    //Se recibe el mensaje y el apodo del cuerpo de la solicitud POST.
    const { message, nickname } = req.body;

    //Se transmite los datos a través de Socket.IO a todos los clientes conectados.
    io.emit('chat message', { message, nickname });

    //Se responde con un mensaje de confirmación que se envía al archivo php.
    res.send('Mensaje recibido con éxito.');
    //console.log(req.body);
});

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
});


//Se ejecuta el callback cuando se obtiene una conexión
io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
        //Evitamos enviar el mensaje al usuario que lo redactó.
        socket.broadcast.emit('chat message', data);
        //Agregar el mensaje directamente al usuario que lo envió.
        socket.emit('chat message', data);
    });

    //Se maneja el evento typing
    socket.on('typing', (data) => {
        socket.broadcast.emit('user typing', { nickname: data.nickname });
    });

    //Se maneja el evento stop typing
    socket.on('stop typing', (data) => {
        socket.broadcast.emit('user stop typing', { nickname: data.nickname });
    });
});


server.listen(port, () => {
    console.log(`Listening on *:${port}`);
});
