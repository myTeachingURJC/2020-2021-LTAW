const fs = require('fs');

//-- Fichero JSON por defecto
let fichero="test.json";

//-- Leer fichero de los argumentos
if (process.argv.length > 2) {
  fichero = process.argv[2];
}

console.log(`Fichero: ${fichero}`);

//-- Contenido del fichero
let data;

//-- Abrir el fichero JSON
try {
  data = fs.readFileSync(fichero);
} catch (error) {
  console.log("--> Error al abrir fichero");
  console.log("Usando valor cableado");
  data="3";
}


console.log("");
console.log("-------Objeto:")

//-- Obtener el objeto
let obj = JSON.parse(data);


switch (typeof obj) {
  case 'number':
    
    break;

  default:
    break;
}

switch (typeof obj) {

}

if (typeof obj === 'number') {
  console.log("NUMERO: " + obj);
}

if (typeof obj == 'string') {
  console.log("STRING: " + obj);
}

if (typeof obj == 'boolean') {
  console.log("Boolean: " + obj)
}

if ()

console.log("");
