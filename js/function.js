





 // o almacenar array completo
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listadoAnillos", JSON.stringify(anillos));


// obtencion de lo almacenado dandole una clase y obteniendo solo nombre y precio


class Anillos {

constructor(obj) {
	this.nombre = obj.nombre;
	this.precio = parseFloat(obj.precio);

}

};


const anillosStorage = JSON.parse(localStorage.getItem("listadoAnillos"));
const anillos_2 = [];
for (const objeto of anillosStorage)
    anillos_2.push(new Anillos(objeto));
console.log(anillos_2);

//-----------------------------------funcion de compra

function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
   
    alert("producto: "+productoNuevo.nombre+" agregado al carro!")
    document.getElementById("tablabody").innerHTML+=`
     <tr>
         <td>${productoNuevo.id}</td>
         <td>${productoNuevo.nombre}</td>
         <td>${productoNuevo.precio}</td>
     </tr>`;
     localStorage.setItem("carrito",JSON.stringify(carrito));
 };

//Finalizar compra

 carrito.forEach(producto => {
        //Evento para cada boton
        document.getElementById(`finalizar${productoNuevo.precio}`).addEventListener('click', function() {
            suma(producto);
        });
    });

