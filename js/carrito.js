// Chequeamos si tenemos algo guardado del a tienda
let prodAgregados = localStorage.getItem("productos-en-el-carrito");
prodAgregados = JSON.parse(prodAgregados);

// Elementos del DOM
const contCarritoVacio = document.querySelector("#carrito-vacio");
const contCarritoProducto = document.querySelector("#carrito-productos");
const contCarritoBotones = document.querySelector("#carrito-botones");
const contCompraHecha = document.querySelector("#compra-hecha");
let botonesBorrar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-botones-izquierda-vaciar");
const contCarritoTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-botones-derecha-comprar");


function cargarProductosEnCarrito() {
    if(prodAgregados && prodAgregados.length > 0) {

        contCarritoVacio.classList.add("inhabilitado");
        contCarritoProducto.classList.remove("inhabilitado");
        contCarritoBotones.classList.remove("inhabilitado");
        contCompraHecha.classList.add("inhabilitado");
    
        contCarritoProducto.innerHTML = "";
    
        prodAgregados.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-img" src="${producto.imagen}" alt="${producto.titulo}">
                            <div class="carrito-producto-nombre">
                                <h2>Titulo 1</h2>
                                <h3>${producto.titulo}</h3>
                            </div>
                            <div class="carrito-producto-cantidad">
                                <h2>Cantidad</h2>
                                <h3>${producto.cantidad}</h3>
                            </div>
                            <div class="carrito-producto-precio">
                                <h2>Precio</h2>
                                <h3>$${producto.precio}</h3>
                            </div>
                            <div class="carrito-producto-total">
                                <h2>Total:</h2>
                                <h3>$${producto.precio * producto.cantidad}</h3>
                            </div>
                            <button class="carrito-producto-eliminar" id="${producto.id}">Borrar</button>
            `;
    
            contCarritoProducto.append(div);
        })
    
    } else {
        contCarritoVacio.classList.remove("inhabilitado");
        contCarritoProducto.classList.add("inhabilitado");
        contCarritoBotones.classList.add("inhabilitado");
        contCompraHecha.classList.add("inhabilitado");
    }

    // Cada vez que se asignen nuevos items asignamos los botones
    cambiarBotonesEliminar();
    // Cada vez que se cargue un producto, se actualiza el total
    updateTotal();
}

// Cargamos todo lo que haya en el storage
cargarProductosEnCarrito();

function cambiarBotonesEliminar() {
    // Que vuelva a buscar en el dom si existen los botones
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", deleteCarrito);
    });

}

function deleteCarrito(e) {
    const idBoton = e.currentTarget.id;
    // const prodEliminado = prodAgregados.fin(producto => producto.id === idBoton);
    const index = prodAgregados.findIndex(producto => producto.id === idBoton);
    prodAgregados.splice(index, 1);
    cargarProductosEnCarrito();

    localStorage.setItem("productos-en-el-carrito", JSON.stringify(prodAgregados));

}

botonVaciar.addEventListener("click", cleanCarrito);
function cleanCarrito() {
    prodAgregados.length = 0;
    Swal.fire({
        title: 'Eliminar carrito',
        text: '¿Queres eliminar todos los productos?',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Rechazar'
      }).then((resultado) => {
        if(resultado.isConfirmed) {
            // Vaciamos todo en el local storage
            localStorage.setItem("productos-en-el-carrito", JSON.stringify(prodAgregados));
            cargarProductosEnCarrito();
        }
      })
}

function updateTotal() {
    const sumaTotal = prodAgregados.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${sumaTotal}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    prodAgregados.length = 0;
    // Vaciamos todo en el local storage
    localStorage.setItem("productos-en-el-carrito", JSON.stringify(prodAgregados));

    contCarritoVacio.classList.add("inhabilitado");
    contCarritoProducto.classList.add("inhabilitado");
    contCarritoBotones.classList.add("inhabilitado");
    contCompraHecha.classList.remove("inhabilitado");

    Swal.fire({
        title: 'Compra Realizada',
        text: '¡Gracias por comprar!',
        icon: 'success',
        confirmButtonText: 'Terminar',
      })
}
