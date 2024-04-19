# Prueba de la Cámara de Comercio del Exterior
La prueba consiste en realizar el tutorial de la página de [Socket.io](https://socket.io/get-started/chat), el cuál se nos enseña a crear una aplicación de chat básica para entender mejor el concepto de websockets. Una vez finalizado el tutorial se pasará a realizar una llamada cURL desde un archivo php.

# Instalación
1. En primer lugar, se deberá de tener instalado Node.js. Para hacerlo se deberá de poner el siguiente comando :
2. Para esta ocasión para correr los archivos php, se empleará Xampp.
3. Se deberá clonar el repositorio en la carpeta deseada de su equipo.
5. Una vez clonado, en la consola de su preferencia, se deberá ir a la ubicación del repositorio clonado e instalar dasdasd para tener todo listo para correr la aplicación. Notarás que el contenido de los archivos son diferentes al tutorial. Esto es debido a qué se implementó cambios para poder recibir la llamada. Asimismo, se implementó algunas funcionalidades nuevas.
6. Finalmente, activa el servidor apache en Xampp y el servidor en Node.js para realizar las pruebas.

# Capturas
A continuación se mostrarán algunas capturas del proyecto:

1. Vistas de la aplicación de chat terminada
   Aplicación terminada corriendo en el puerto 3000 del ambiente local
   ![Vista del chat](screenshots/vistaChat.JPG)
   <p align="center">
  <img src="screenshots/vistaChat.JPG" alt="Texto alternativo" width="700" height="600">
   </p>


   Prueba del funcionamiento del chat
   ![Vista del chat con diálogos](screenshots/vistaChatConDialogo.JPG)

2. Vista de la aplicación de php que ejecutará la llamada cURL
   Aplicación corriendo mediante Xampp
   ![Vista de la app de php](screenshots/vistaFormularioPhp.JPG)

   Validación de que no se envié un mensaje vacío
   ![Vista de la app de php](screenshots/vistaFormularioPhpDatosVacios.JPG)

3. Aplicaciones conectadas entre sí
   ![Vista de la app de php](screenshots/llamadaCurlExitosa.JPG)

# Consideraciones
Esta es una demo básica para demostrar que se puede realizar un llamada cURL desde php hasta un websockte, por lo que hay muchas cosas que se pueden mejorar o implementar ya sea en el aspecto visual o agregando algunas funciones.
