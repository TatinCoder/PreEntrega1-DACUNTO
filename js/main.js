// Agregamos los productos que querramos en la pagina
const productos = [ 
    {
        id: "botines-01",
        titulo:"Botin 1",
        imagen: "../img/tienda/botines.jpg",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 30000
    },
    {
        id: "botines-02",
        titulo:"Botin 2",
        imagen: "../img/tienda/botines2.jpg",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 35000
    },
    {
        id: "botines-03",
        titulo:"Botin 3",
        imagen: "../img/tienda/botines3.jpg",
        categoria: {
            nombre: "Botines",
            id: "botines"
        },
        precio: 40000
    }, 
    {
        id: "camiseta-01",
        titulo:"Camiseta 1",
        imagen: "../img/tienda/camiseta.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 10000
    },
    {
        id: "camiseta-02",
        titulo:"Camiseta 2",
        imagen: "../img/tienda/camiseta2.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 15000
    },
    {
        id: "camiseta-03",
        titulo:"Camiseta 3",
        imagen: "../img/tienda/camiseta3.jpg",
        categoria: {
            nombre: "Camiseta",
            id: "camiseta"
        },
        precio: 20000
    }, 
    {
        id: "pantalones-01",
        titulo:"Pantalones 1",
        imagen: "../img/tienda/pantalones.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 20000
    },
    {
        id: "pantalones-02",
        titulo:"Pantalones 2",
        imagen: "../img/tienda/pantalones2.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 25000
    },
    {
        id: "pantalones-03",
        titulo:"Pantalones 3",
        imagen: "../img/tienda/pantalones3.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 30000
    },
];

// Elementos del DOM
const contProductos = document.querySelector("#cont-productos");
const botonesFiltro = document.querySelectorAll(".boton-filtro");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".prod-agregar");
const numCarrito = document.querySelector("#numero-carrito");

function cargarProductos(productosElegidos) {

    // Hacemos esta funcion para que cuando apliquemos un filtro no se agreguen al HTML, vaciandolo
    contProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("list-producto");
        div.innerHTML= `
            <img class="prod-img" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="prod-cont">
                <h3 class="prod-nombre">${producto.titulo}</h3>
                <p class="prod-precio">$${producto.precio}</p>
                <button class="prod-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contProductos.append(div)
    })

    cambiarBotonesAgregar();
}

cargarProductos(productos);

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {

        // Sacamos todos los active para solo poner el que estamos clickeando
        botonesFiltro.forEach(boton => boton.classList.remove("active"));

        // Cuando clickeamos se queda en active
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            // Filtramos segun la ID del producto
            const productoFiltro = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoFiltro.categoria.nombre;

            const productosSelec = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosSelec);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function cambiarBotonesAgregar() {
    // Que vuelva a buscar en el dom si existen los botones
    botonesAgregar = document.querySelectorAll(".prod-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", addCarrito);
    });

}

let prodAgregados;

// Chequeamos si tenemos algo guardado del a tienda
let prodAgregadosGuardados = localStorage.getItem("productos-en-el-carrito");
if (prodAgregadosGuardados) {
    prodAgregados = JSON.parse(prodAgregadosGuardados);
    // Mantenemos el numero de carrito en la tienda
    cambiarNumCarrito();
} else {
    prodAgregados = [];
}

function addCarrito(e) {
    const idBoton = e.currentTarget.id;
    const prodAgregado = productos.find(producto => producto.id === idBoton);

    // Con some podemos ver si ya existe
    if(prodAgregados.some(producto => producto.id === idBoton)) {
        const index = prodAgregados.findIndex(producto => producto.id === idBoton);
        // Sumamos la cantidad segun lo que estemos tocando el boton +1
        prodAgregados[index].cantidad++;
    } else {
        prodAgregado.cantidad = 1;
        prodAgregados.push(prodAgregado);
    }

    cambiarNumCarrito();

    // Guardamos los array en el local storage
    localStorage.setItem("productos-en-el-carrito", JSON.stringify(prodAgregados));
}

function cambiarNumCarrito() {
    let newNumCarrito = prodAgregados.reduce((acc, producto) => acc + producto.cantidad, 0);
    numCarrito.innerText = newNumCarrito;
}