// Con esto se espera a que el usuario este registrado
let registro = confirm("¿Ya estas registrado?");

while(!registro) {
    console.log("Podes ingresar una vez registrado..");
    registro = confirm("¿Ya te registraste?");
}

// Objeto para el producto
class Producto {
    constructor(nombre,precio,preciofinal,cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.preciofinal = preciofinal;
        this.cantidad = cantidad;
    }
}

// Variables para calculo
let a = 0;
let monto = 0;
let b = 0;
let precioFinal = 0;

// Agregar productos

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
for (var producto of arrayAddProductos) {
    document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
    console.log(Producto.nombre);
    document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
    console.log(Producto.precio);
    document.write("<li><h3>Precio Final: $"+ producto.preciofinal +"</h3></li>");
    console.log(Producto.preciofinal);
    document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
    console.log(Producto.cantidad);
}

// Sin stock -- Basicamente cantidad = 0
var SinStock = arrayAddProductos.filter(producto => producto.cantidad == 0 );
console.log(SinStock);
document.write("<h2 class='titulo-nombre-ss'>Productos sin Stock: </h2>");
for (var producto of SinStock) {
    document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
    document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
    document.write("<li><h3>Precio Final: $"+ producto.preciofinal +"</h3></li></ul>");
    // document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
}

// Ordenados por Precio 
var OrdenPrecio = [];
OrdenPrecio = arrayAddProductos.map(items => items);
var OrdenPrecio = arrayAddProductos;
OrdenPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log(OrdenPrecio);
document.write("<h2 class='titulo-nombre-op'>Productos ordenados por Precio: </h2>");
for (var producto of OrdenPrecio) {
    document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
    document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
    document.write("<li><h3>Precio Final: $"+ producto.preciofinal +"</h3></li>");
    document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
}

// Busqueta de un Producto
var busqueda = prompt("Ingrese el producto que quiere Comprar: ").toUpperCase();
var BuscarProducto = arrayAddProductos.filter(producto => producto.nombre.includes(busqueda));
console.log(BuscarProducto);
document.write("<h2 class='titulo-nombre-bp'>Carrito de Compra: </h2>");

let messi = 0.50;
let foressi = 0.30;
let primavera = 0.10;
let descuento = 0;

for (var producto of BuscarProducto) {
    // CUPONES --> MESSI = 50%, FORESSI = 30%, PRIMAVERA = 10%
    let check = confirm("¿Tenes algun cupon descuento para aplicar?");
    if(check != 0) {
        // CUPONES --> MESSI = 50%, FORESSI = 30%, PRIMAVERA = 10%
        cupon = prompt("Ingresa el cupon aca abajo").toUpperCase();
        switch(cupon){
        // En caso de que el valor inicial no sea correcto, se comunica que el producto no esta disponible
            case 'MESSI':
                console.log("Felicidades! Cupon del 50% aplicado");
                descuento = calculoDescuento(producto.preciofinal, messi);
                console.log("Precio Total tras aplicar el descuento es de: ", descuento);

                document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
                document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
                document.write("<li><h3>Precio Final: $"+ descuento +"</h3></li>");
                document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
                break;
            case 'FORESSI':
                console.log("Felicidades! Cupon del 30% aplicado");
                descuento = calculoDescuento(producto.preciofinal, foressi);
                console.log("Precio Total tras aplicar el descuento es de: ", descuento);
                
                document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
                document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
                document.write("<li><h3>Precio Final: $"+ descuento +"</h3></li>");
                document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
                break;
            case 'PRIMAVERA':
                console.log("Felicidades! Cupon del 10% aplicado");
                descuento = calculoDescuento(producto.preciofinal, foressi);
                console.log("Precio Total tras aplicar el descuento es de: ", descuento);
                
                document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
                document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
                document.write("<li><h3>Precio Final: $"+ descuento +"</h3></li>");
                document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
                break;
            // En caso de que el valor inicial no sea correcto, se comunica que el producto no esta disponible
            default:
                console.log("Cupon invalido, gracias por realizar la compra.")
                break;
        }
    
    }else {
        document.write("<h3>Nombre: "+ producto.nombre +"</h3>");
        document.write("<ul><li><h3>Precio: $"+ producto.precio +"</h3></li>");
        document.write("<li><h3>Precio Final: $"+ producto.preciofinal +"</h3></li>");
        document.write("<li><h3>Cantidad: "+ producto.cantidad +" Unidad(es)</h3></li></ul>");
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
