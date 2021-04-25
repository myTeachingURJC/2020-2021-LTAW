const WebSocketServer = require('websocket').server;
const http = require('http');

const PUERTO = 8080;

const server = http.createServer( (req, res) => {
    console.log('Solicitud http: ' + req.url);
    res.writeHead(404);
    res.end();
});

//-- Crear el servidor de websockets, asociado al servidor http
wsServer = new WebSocketServer({httpServer: server});

wsServer.on('request', (req) => {
    console.log("Conexión al WebSocket");
    let connection = req.accept();
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', (message) => {
        console.log("MENSAGE RECIBIDO!!!!");
    });

});


server.listen(PUERTO);

console.log("Escuchando en puerto: " + PUERTO);
