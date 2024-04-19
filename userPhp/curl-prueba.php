<?php
// Verificar si se ha enviado un mensaje desde el formulario y que el mensaje no esté vacío.
if (isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {
    $mensaje = $_POST['mensaje'];

    // Datos a enviar al servidor de node.
    $data = array('message' => $mensaje, 'nickname' => 'Usuario de php');
    $data_string = json_encode($data);

    // Crear una solicitud curl para enviar el mensaje al servidor.
    $ch = curl_init('http://localhost:3000/send-message');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string))
    );

    //Respuesta que se obtiene del servidor de NodeJs. 
    $response = curl_exec($ch);
    if ($response === false) {
        echo "Error al enviar mensaje al chat del servidor: " . curl_error($ch);
    } else {
        echo "Mensaje enviado al chat de node correctamente.";
    }
    curl_close($ch);
} else {
    echo "Error: El mensaje está vacío.";
}
?>
