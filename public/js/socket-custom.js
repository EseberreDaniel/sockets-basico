var socket = io();

//Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado');
});
socket.on('disconnect', function() {
    console.log('Conexion perdida');
});


//Enviar informacion desde el web
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Conexion activa'
}, function(resp) {
    console.log(resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});