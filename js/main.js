// FORMULARIO EN CONTACTO
class Usuario {
    constructor(nombre, mail, motivo) {
        this.nombre = nombre;
        this.mail = mail;
        this.motivo = motivo;
    }
}

// Variables para el DOM
let arrayUsuarios = [];
let foressiForm = document.querySelector('#formulario');
let formNombre = document.querySelector('#fmNombre');

let nombreUser = formulario.querySelector('.fmNombre').value;
let mailUser = formulario.querySelector('.fmMail').value;
let motivoUser = formulario.querySelector('.fmMotivo').value;

let userIngresado = document.querySelector('#userIngresado');
let mostrarTodos = document.querySelector('#mostrarTodos');
let parrafos = mostrarTodos.getElementsByTagName("p");

let chequeo = false;
foressiForm.addEventListener("submit", agregarUsers);
btnMostrar.addEventListener('click', MostrarUsers);

// Focus en el ingreso del Nombre
formNombre.focus();

// Funciones
function checkForm() {
    nombreUser = formulario.querySelector('.fmNombre').value;
    mailUser = formulario.querySelector('.fmMail').value;
    motivoUser = formulario.querySelector('.fmMotivo').value;
    console.log(nombreUser);
    console.log(mailUser);
    console.log(motivoUser);
    if (nombreUser == '' || mailUser == '' || motivoUser == '' ) {
        alert("Tenes que completar todo para registrarte.");
        formNombre.focus();
        chequeo = false;
    } else {
        chequeo = true;
    }
}

function agregarUsers(e) {
    e.preventDefault();
    checkForm();
    if (chequeo == true) {
        let confirmacionUser = confirm("Queres registrarte como Miembro?");
        if (confirmacionUser == true) {
            let formulario = e.target;
            arrayUsuarios.push(new Usuario(nombreUser, mailUser, motivoUser));
        } else {
            alert('Usuario no registrado');
        }

        formulario.querySelector('.fmNombre').value = '';
        formulario.querySelector('.fmMail').value = '';
        formulario.querySelector('.fmMotivo').value = '';
        userIngresado.innetHTML = '';
        
        AddDom();
        formNombre.focus();
    } else {
        formNombre.focus();
    }
}

function AddDom() {
    userIngresado.innerHTML = `<div class="usuariosform"><h3> Miembro Registrado:</h3>
    <p> Nombre: ${nombreUser}</p>
    <p> Mail: ${mailUser}</p>
    <p> Motivo: ${motivoUser}</p></div>
    `;
}

function MostrarUsers(e) {
    e.preventDefault();
    let i = 0;
    mostrarTodos.innerHTML = `<div class="todosform"><h3> Todos los miembros Registrados:</h3></div>`;
    for (const usuario of arrayUsuarios) {
        mostrarTodos.innerHTML += `<div class="todosform"><p> Nombre: ${nombreUser}</p>
        <p> Mail: ${mailUser}</p>
        <p> Motivo: ${motivoUser}</p></div>
        `;
    }
}


// AGREGAR PRODUCTOS EN LA TIENDA
// Variables para calculo
let a = 0;
let monto = 0;
let b = 0;
let precioFinal = 0;

// Agregar productos
function agregarProductos() {
    class Producto {
        constructor(nombre,precio,preciofinal,cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.preciofinal = preciofinal;
            this.cantidad = cantidad;
        }
    }

    var arrayAddProductos = [];
    do {
        var check = prompt("Ingresa el nombre del producto. ('Listo' para terminar de agregar)").toUpperCase();
        if (check == 'LISTO') {
            break;
        }
        else{
            NombreProducto = check;
            let PrecioProducto = prompt("Ingrese un precio para el producto");
            PrecioFinal = calculoAdicional(PrecioProducto);
            var CantidadProducto = prompt("Ingrese el Stock del producto");  

            console.log("Nombre de producto: " + NombreProducto);
            console.log("Precio del Producto: $" + PrecioProducto);
            console.log("Precio Final: $" + PrecioFinal);
            console.log("Cantidad: " + CantidadProducto);
            // Pusheamos todo al array
            arrayAddProductos.push(new Producto(NombreProducto, PrecioProducto, PrecioFinal, CantidadProducto));
        }
    }
    // Imprimimos la lista de productos
    while (check != 'LISTO')
        console.log(arrayAddProductos);

        // Printeamos en el HTML los productos
    for (let producto of arrayAddProductos) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML= `<h3>Nombre: ${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Precio Final: $${producto.preciofinal}</p>
        <p>Precio Cantidad: ${producto.cantidad}</p>
        `;
        document.main.appendChild(contenedor);
        console.log(Producto.nombre);
        console.log(Producto.precio);
        console.log(Producto.preciofinal);
        console.log(Producto.cantidad);
    }

    // Sin stock -- Basicamente cantidad = 0
    var SinStock = arrayAddProductos.filter(producto => producto.cantidad == 0 );
    console.log(SinStock);
    for (var producto of SinStock) {
        document.write("<h2 class='titulo-nombre-ss'>Productos sin Stock: </h2>");
        contenedor.innerHTML = `<h3>Nombre: ${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Precio Final: $${producto.preciofinal}</p>
            <p>Precio Cantidad: ${producto.cantidad}</p>
        `;
        document.body.appendChild(contenedor);
    }
}

// FUNCIONES
function calculoAdicional(costo) {
    let cuenta = 0;
    let pasaje = 0;
    let resultado = 0;
    
    // Calculamos el 10% del producto
    cuenta = costo / 10;
    // Pasamos el precio a numero
    pasaje = costo * 1;

    // Sumamos para el resultado final
    resultado = pasaje + cuenta;

    // Devolvemos el resultado de la division
    return resultado;
}

function calculoDescuento(monto, b) {
    let desc = 0;
    let caldesc = 0;

    // Aplicamos el descuento al precio total en caso de que haya cupon.
    caldesc = monto * b;
    desc = monto - caldesc;

    return desc;
}
