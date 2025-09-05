<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    require_once __DIR__ . "/../../dbc.php"; // en ignore para no subir a git por seguridad

    $nombre  = $conn->real_escape_string($_POST['nombre']);
    $mail    = $conn->real_escape_string($_POST['mail']);
    $tel     = $conn->real_escape_string($_POST['tel']);
    $mensaje = $conn->real_escape_string($_POST['mensaje']);

    $sql = "INSERT INTO mensajes_usuarios (nombre, mail, tel, mensaje) 
            VALUES ('$nombre', '$mail', '$tel', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "<div class='alert alert-success'>✅ Tu mensaje se ha enviado correctamente.</div>";
    } else {
        if ($conn->errno == 1062) {
            echo "<div class='alert alert-warning'>⚠️ Este correo ya está registrado.</div>";
        } else {
            echo "<div class='alert alert-danger'>❌ Error al guardar los datos. Intenta de nuevo.</div>";
        }
    }

    $conn->close();
}
?>
