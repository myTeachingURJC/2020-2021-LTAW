const fs = require('fs');


function print_array(arr, indent)
{
  
  let indent_str = " ".repeat(indent);

  arr.forEach((element, index) => {
    process.stdout.write(indent_str);
    process.stdout.write(index + ': ');
    print_element(element, indent + 2);
    //console.log(index + ': ' + element);
  });
}

function print_obj(obj, indent)
{
  let indent_str = " ".repeat(indent);

  for (let name in obj) {
    process.stdout.write(indent_str);
    process.stdout.write(name + ': ');
    print_element(obj[name], indent + 0);
  }

}

//-- Imprimir un objeto generico
function print_element(obj, indent) 
{

  let indent_str = " ".repeat(indent);

  switch (typeof obj) {
    case 'number':
      console.log("NUMERO: " + obj);
      break;
  
    case 'string':
      console.log("STRING: " + obj);
      break;

    case 'boolean':
      console.log("Boolean: " + obj);
      break;
  
    case 'object':
      if (Array.isArray(obj)) {
        console.log("Array: " + obj.length + " elementos");
        print_array(obj, indent + 2);
      }
      else if (obj === null) {
        console.log("NULL!");
      } else {
        process.stdout.write("Objeto: " + Object.keys(obj).length + " propiedades\n");
        print_obj(obj, indent + 2);
      }
      break;
  
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

print_element(obj, 0);


console.log("");
