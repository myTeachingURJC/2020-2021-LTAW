console.log("Ejecutando Javascript...");

const display1 = document.getElementById("display1");
const boton_test = document.getElementById("boton_test");
const boton_ajax = document.getElementById("boton_ajax");

boton_test.onclick = ()=> {
    display1.innerHTML+="<p>Hola desde JS!</p>";
}

boton_ajax.onclick = () => {
    display2.innerHTML+="<p>Haciendo petición...</p>\n";

    //-- Crear objeto para hacer peticiones AJAX
    const m = new XMLHttpRequest();

    //-- Cuando la haya alguna noticia sobre la peticion
    //-- ejecuta este código
    m.onreadystatechange=function(){
        //-- Petición enviada y recibida. Todo OK!
        if (m.readyState==4 && m.status==200){

            //-- La respuesta es un objeto JSON
            let productos = JSON.parse(m.responseText)

            //-- Meter el resultado en un párrafo html
            display2.innerHTML += "<p>";

            //--Recorrer los productos del objeto JSON
            for (let i=0; i < productos.length; i++) {

                //-- Añadir cada producto al párrafo de visualización
                display2.innerHTML += productos[i];

                //-- Separamos los productos por ',''
                if (i < productos.length-1) {
                  display2.innerHTML += ', ';
                }
            }

            //-- Cerrar el párrafo
            display2.innerHTML += "</p>"
        }
    }

    //-- Configurar la petición
    m.open("GET","http://localhost:8080/productos", true);

    //-- Enviar la petición!
    m.send();
}

