<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar mensaje al chat creado con socket.io</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="app">
        <div class="contenedor-principal">
            <div class="fila">
                <h1>Llamada curl al websocket con php</h1>
            </div>
            <div class="fila">
                <form id="messageForm">
                    <input type="text" id="mensaje" name="mensaje" placeholder="Mensaje...">
                    <div class="fila">
                        <button type="submit" class="boton-enviar">Enviar</button>
                    </div>
                </form>
            </div>

            <div class="fila">
                <div id="mensajeError" style="display: none;"></div>
                <div id="mensajeEnviado" style="display: none;"></div>
            </div>
        </div>
    </div>

    <script src="js/index.js"></script>
</body>

</html>