const express = require('express');
const app = express();
 
//-- Puerto donde lanzar el servidor
const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Hello World');
})
 
app.listen(PORT);