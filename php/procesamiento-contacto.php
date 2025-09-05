<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Conexión a la base de datos
    $servername = "sql103.infinityfree.com";
    $username   = "if0_39815093";      // tu usuario de MySQL
    $password   = "qvmw6qyIxMCV";          // tu contraseña de MySQL
    $dbname     = "if0_39815093_contacto";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // 2. Captura y sanitización de datos
    $nombre  = $conn->real_escape_string($_POST['nombre']);
    $mail    = $conn->real_escape_string($_POST['mail']);
    $tel     = $conn->real_escape_string($_POST['tel']);
    $mensaje = $conn->real_escape_string($_POST['mensaje']);

    // 3. Insertar en la tabla mensajes_usuarios
    $sql = "INSERT INTO mensajes_usuarios (nombre, mail, tel, mensaje) 
            VALUES ('$nombre', '$mail', '$tel', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "✅ Datos guardados correctamente.";
    } else {
        // Manejo de error por duplicado de correo
        if ($conn->errno == 1062) {
            echo "⚠️ El correo ya está registrado.";
        } else {
            echo "❌ Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // 4. Cerrar conexión
    $conn->close();
}
?>
