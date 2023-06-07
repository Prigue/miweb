// CONTENEDOR DE TODOS LOS PRODUCTOS
const listaProductos = document.querySelector('.contenedor-items')

// SI SE DESEA AGREGAR MAS PRODUCTOS UNICAMENTE MODIFICAR EL ARCHIVO PRODUCTOS.JSON Y SE AGREGA AUTOMATICAMENTE

// OBTENER LOS PRODUCTOS DEL JSON LOCAL
const getProductos = async ()=> {
    const response = await fetch("productos.json");
    const productos = await response.json();
    // PINTAR LOS PRODUCTOS DEL JSON LOCAL
    productos.forEach((product)=>{
        let content = document.createElement("div");
        content.className = "item";
        content.innerHTML = `
            <img src="${product.img}" alt="proteina" class="img-item">
            <div class="info-item">
                <h2 class="titulo-item">${product.nombre}</h2>
                <p class="precio-item">$${product.precio}</p>
                <button class="boton-item">Agregar al carrito</button>
            </div>
        `;
        listaProductos.append(content);
    })
};

getProductos();



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

