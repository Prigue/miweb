// CONTENEDOR DE TODOS LOS PRODUCTOS
const listaProductos = document.querySelector('.contenedor-items')

// ARRAY DE LOS PRODUCTOS EN EL CARRITO

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const valorTotal = document.querySelector('.carrito-total-pagar')


const contenedorProductos = document.querySelector('#menu-carrito');

listaProductos.addEventListener('click', e =>{

    if(e.target.classList.contains('boton-item')){
        const producto = e.target.parentElement;

        const infoProducto = {
            cantidad: 1,
            precio: producto.querySelector('.precio-item').textContent,
            titulo: producto.querySelector('.titulo-item').textContent
        };

        

        const existe = carrito.some(producto => producto.titulo === infoProducto.titulo)

        if (existe){
            const productos = carrito.map(producto =>{
                if(producto.titulo === infoProducto.titulo){
                    producto.cantidad += 1;
                    return producto;
                } else{
                    return producto;
                }
            })
            carrito = [...productos];
        }else{
            carrito = [...carrito, infoProducto];
        }


        mostrarHTML();
        guardarLocal();

    }

})

contenedorProductos.addEventListener('click', e =>{
    if(e.target.classList.contains('carrito-icono-cerrar')){
        const producto = e.target.parentElement;
        const titulo = producto.querySelector('p').textContent;
            carrito = carrito.filter(
                producto => producto.titulo !== titulo
            );
            guardarLocal();
            mostrarHTML();
        }
    })


const mostrarHTML = () => {

    contenedorProductos.innerHTML ='';

    let total = 0;
    
    carrito.forEach(producto =>{
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('item-carrito');

        nuevoProducto.innerHTML = `
                        <div class="carrito-producto-info">
                            <span class="carrito-producto-cantidad">${producto.cantidad}</span>
                            <p class="carrito-producto-titulo">${producto.titulo}</p>
                            <span class="carrito-producto-precio">${producto.precio}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="carrito-icono-cerrar">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> 
        `;

        contenedorProductos.append(nuevoProducto);

        total = total + parseInt(producto.cantidad * producto.precio.slice(1))
    })

    valorTotal.innerText = `$${total}`
}
mostrarHTML();

// GUARDAR CARRITO EN LOCALSTORAGE

const guardarLocal = () =>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

JSON.parse(localStorage.getItem('carrito'));


// LIMPIAR CARRITO

const limpiarCarrito = document.querySelector('#limpiar-carrito-boton');

limpiarCarrito.addEventListener('click', e => {
    carrito = [];
    guardarLocal();
    mostrarHTML()
})

// AJAX Y FETCH

// const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
// const lista = document.querySelector('.info-item')
// fetch(urlUsuarios)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((usuario) => {
//             const li = document.createElement('li');
//             li.textContent = "Nombre: " + usuario.name + "Telefono: " + usuario.phone;
//             lista.append(li);
//         })
//     })

// async function traerProductos(){
//     const url = "url de la api"

//     try {
//         const resultado = await fetch(url);
//         const respuesta = await resultado.json();
//         pintarProductos(respuesta);
//     } catch (error){
//         console.log(error);
//     }
// }

// function pintarProductos(productos){
//      const lista = document.querySelector('.info-item');
//      productos.forEach((producto) => {
//         const {title, price} = producto;
//         producto.innerHTML += `
//         ACA VA EL HTML QUE QUIERO INTRODUCIR 



//         `
//         lista.append(producto);
//      })
// }