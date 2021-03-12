const fs = require('fs');


function print_array(arr, indent)
{
  
  let indent_str = " ".repeat(indent);

  arr.forEach((element, index) => {
    process.stdout.write(indent_str);
    console.log(index + ': ' + element);
  });
  
}

//-- Imprimir un objeto
function print_obj(obj, indent) 
{

  let indent_str = " ".repeat(indent);

  switch (typeof obj) {
    case 'number':
      console.log(indent_str + "NUMERO: " + obj);
      break;
  
    case 'string':
      console.log(indent_str + "STRING: " + obj);
  
    case 'boolean':
      console.log(indent_str + "Boolean: " + obj);
  
    case 'object':
      if (Array.isArray(obj)) {
        process.stdout.write(indent_str);
        console.log("Array: " + obj.length + " elementos");
        print_array(obj, indent + 2);
      }
      else if (obj === null) {
        console.log("NULL!");
      } else {
        console.log("Objeto: " + Object.keys(obj).length + " propiedades");
      }
  
    default:
      break;
  }
}

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

print_obj(obj, 0);


console.log("");
