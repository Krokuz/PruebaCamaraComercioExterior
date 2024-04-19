# Prueba de la Cámara de Comercio del Exterior
La prueba consiste en realizar el tutorial de la página de [Socket.io](https://socket.io/get-started/chat), en el cuál se nos enseña a crear una aplicación de chat básica para entender mejor el concepto de websockets. Una vez finalizado el tutorial se pasará a realizar una llamada cURL desde un archivo php.


# Instalación
1. En primer lugar, se deberá de tener instalado [Node.js](https://nodejs.org/en).
2. En esta ocasión, para montar un servidor local que pueda correr archivos php se empleará [Xampp](https://www.apachefriends.org/es/index.html).
3. Se deberá clonar el repositorio a la carpeta deseada de su equipo. El repositorio contiene dos carpetas principales:
   <ul>
      <li><b>userPhp</b>: Contiene los archivos php.</li>
      <li><b>ExamenCamaraExterior</b>: Contiene los archivos de la aplicación en Node.</li>
   </ul> 
5. En el caso de la aplicación php, solo basta con ponerla dentro de la carpeta **htdocs** que se encuentra ubicada en la ruta dónde se instaló Xampp y activar el botón Start de la interfaz del mismo.
6. Por otro lado, para la aplicación de node, una vez se ubique mediante consola en la ruta correcta, se deberá de digitar el comando **npm install** para instalar las dependencias para poder correr la aplicación. Notarás que el contenido de los archivos son diferentes al tutorial. Esto es debido a qué se implementó cambios para poder recibir la llamada. Asimismo, se implementó algunas funcionalidades nuevas.
7. Finalmente, se deberá usar el siguiente comando: **node ./app/index.js** para ejecutar la aplicación del chat.

# Explicación del código
1. Archivo index.js ubicado en la carpeta app del proyecto de la aplicación del chat:
   
```javascript
//Se crea un endpoint para poder recibir la petición POST del archivo php.
app.post('/send-message', (req, res) => {
//Se realiza una destructuración de objetos para extraer los datos requeridos del contenido del cuerpo de la solicitud.
    const { message, nickname } = req.body;
//Transmitimos los datos mediante Socket.IO a todos los clientes conectados.
    io.emit('chat message', { message, nickname });
//Se envía un mensaje de confirmación al archivo php.
    res.send('Mensaje recibido con éxito.');
});
```
2. Archivo curl-prueba.php ubicado en carpeta userPhp:

```PHP
//Almacenamos los datos que se van a enviar al servidor.
   $data = array('message' => $mensaje, 'nickname' => 'Usuario de php');
//Convertimos el array en un JSON.
   $data_string = json_encode($data);
//Se crea una solicitud curl para enviar el mensaje al servidor apuntando al endpoint creado previamente (send-message).
    $ch = curl_init('http://localhost:3000/send-message');

//Aquí se ponen las configuraciones necesarias para que la llamada funcione.

//Se ejecuta la solicitud y la respuesta es almacenada.
    $response = curl_exec($ch);
    if ($response === false) {
        echo "Error al enviar mensaje al chat del servidor: " . curl_error($ch);
    } else {
        echo "Mensaje enviado al chat de node correctamente.";
    }
//Cerramos la sesión.
    curl_close($ch);
```

# Capturas
A continuación se mostrarán algunas capturas del proyecto:

1. Vistas de la aplicación de chat terminada
   
   - Aplicación terminada
   
   <p align="center">
     <img src="screenshots/vistaChat.JPG" alt="Vista del chat">
   </p>


   - Prueba del funcionamiento del chat
   
   <p align="center">
     <img src="screenshots/vistaChatConDialogo.JPG" alt="Vista del chat con dialogo">
   </p>

2. Vista de la aplicación de php que ejecutará la llamada cURL
   
   - Aplicación corriendo mediante Xampp
   
   <p align="center">
     <img src="screenshots/vistaFormularioPhp.JPG" alt="Vista de la app de php">
   </p>

   - Validación para mensajes vacíos
   
   <p align="center">
     <img src="screenshots/vistaFormularioPhpDatosVacios.JPG" alt="Vista de la app de php">
   </p>

3. Aplicaciones conectadas entre sí
  
   <p align="center">
     <img src="screenshots/llamadaCurlExitosa.JPG" alt="Vista app funcionando">
   </p>


# Consideraciones
Esta es una demo básica para demostrar que se puede realizar un llamada cURL desde php hasta un websockte, por lo que hay muchas cosas que se pueden mejorar o implementar ya sea en el aspecto visual o agregando algunas funciones.
