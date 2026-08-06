<?php
/**
 * Eurotalento - Procesador del formulario de contacto
 * Sube este archivo a la carpeta pública de tu hosting (public_html)
 * y apunta el formulario a: action="/contacto.php" method="POST"
 */

declare(strict_types=1);

$DESTINO   = 'hola@eurotalento.com';
$REMITENTE = 'web@eurotalento.com'; // debe pertenecer a tu dominio
$GRACIAS   = '/gracias.html';       // página de agradecimiento (opcional)

function limpiar(string $v, int $max): string {
    $v = trim($v);
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr($v, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método no permitido');
}

// Anti-spam: campo oculto que los humanos dejan vacío
if (!empty($_POST['_gotcha'])) {
    http_response_code(200);
    exit('OK');
}

$nombre   = limpiar((string)($_POST['nombre']   ?? ''), 100);
$email    = limpiar((string)($_POST['email']    ?? ''), 255);
$empresa  = limpiar((string)($_POST['empresa']  ?? ''), 120);
$telefono = limpiar((string)($_POST['telefono'] ?? ''), 40);
$mensaje  = mb_substr(trim((string)($_POST['mensaje'] ?? '')), 0, 3000);

$errores = [];
if ($nombre === '')  { $errores[] = 'El nombre es obligatorio.'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errores[] = 'El email no es válido.'; }
if ($mensaje === '') { $errores[] = 'El mensaje es obligatorio.'; }

$esAjax = strtolower((string)($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '')) === 'xmlhttprequest'
    || str_contains((string)($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json');

if ($errores) {
    http_response_code(422);
    if ($esAjax) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => false, 'errores' => $errores], JSON_UNESCAPED_UNICODE);
    } else {
        echo implode('<br>', array_map('htmlspecialchars', $errores));
    }
    exit;
}

$asunto = 'Nuevo contacto web: ' . $nombre;
$cuerpo = "Nuevo mensaje desde el formulario de eurotalento.com\n\n"
    . "Nombre:   {$nombre}\n"
    . "Email:    {$email}\n"
    . "Empresa:  " . ($empresa  !== '' ? $empresa  : '-') . "\n"
    . "Teléfono: " . ($telefono !== '' ? $telefono : '-') . "\n\n"
    . "Mensaje:\n{$mensaje}\n\n"
    . "---\n"
    . 'Fecha: ' . date('d/m/Y H:i') . "\n"
    . 'IP:    ' . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n";

$cabeceras = implode("\r\n", [
    'From: Web Eurotalento <' . $REMITENTE . '>',
    'Reply-To: ' . $nombre . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
]);

$enviado = @mail($DESTINO, '=?UTF-8?B?' . base64_encode($asunto) . '?=', $cuerpo, $cabeceras);

if ($esAjax) {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code($enviado ? 200 : 500);
    echo json_encode(['ok' => $enviado], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($enviado) {
    header('Location: ' . $GRACIAS, true, 303);
    exit;
}

http_response_code(500);
echo 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbenos a ' . htmlspecialchars($DESTINO) . '.';
