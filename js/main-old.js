// Con esto se espera a que el usuario este registrado
let registro = confirm("¿Ya estas registrado?");

while(!registro) {
    console.log("Podes ingresar una vez registrado..");
    registro = confirm("¿Ya te registraste?");
}

// Elegir que comprar de la tienda -- El toUpper es para que en el switch se escriba todo en mayuscula
let producto = prompt("¿Que producto desea adquirir? (Camiseta, Botines o Guantes)").toUpperCase();
let confirmacion = false;

// Variables de costos
let precio = 0;
let adicional = 0;
let final = 0;

// Variables para calculo
let a = 0;
let monto = 0;
let b = 0;
let precioFinal = 0;

switch (producto) {
    // En caso de que el valor inicial no sea correcto, se comunica que el producto no esta disponible
    default:
        console.log("No tenemos ese producto disponible")
        break;
    case 'CAMISETA':
        console.log("La camiseta cuesta $50.000");
        confirmacion = confirm("¿Estas seguro que quieres seguir con la compra?");
        if(confirmacion != 0)
        {
            precio += 50000;

            // Asigno a variables los resultados para despeus imprimirlos o aplicar desuento.
            adicional = calculoAdicional(precio);
            final = calculoPrecioFinal(precio, adicional);

            console.log("Precio del Producto: ", precio);
            console.log("Adicional por servicio: ", adicional);
            console.log("Precio final: ", final)
            break;
        }
        else {
            console.log("Gracias por visitarnos.")
            break;
        }
    case 'BOTINES':
        console.log("Los botines cuestan $80.000");
        confirmacion = confirm("¿Estas seguro que quieres seguir con la compra?");
        if(confirmacion != 0)
        {
            precio += 80000;

            // Asigno a variables los resultados para despeus imprimirlos o aplicar desuento.
            adicional = calculoAdicional(precio);
            final = calculoPrecioFinal(precio, adicional);

            console.log("Precio del Producto: ", precio);
            console.log("Adicional por servicio: ", adicional);
            console.log("Precio final: ", final)
            break;
        }
        else {
            console.log("Gracias por visitarnos.")
            break;
        }
    case 'GUANTES':
        console.log("Los guantes cuestan $20.000");
        confirmacion = confirm("¿Estas seguro que quieres seguir con la compra?");
        if(confirmacion != 0)
        {
            precio += 20000;

            // Asigno a variables los resultados para despeus imprimirlos o aplicar desuento.
            adicional = calculoAdicional(precio);
            final = calculoPrecioFinal(precio, adicional);

            console.log("Precio del Producto: ", precio);
            console.log("Adicional por servicio: ", adicional);
            console.log("Precio final: ", final);
            break;
        }
        else {
            console.log("Gracias por visitarnos.")
            break;
        }  
}

// CUPONES --> MESSI = 50%, FORESSI = 30%, PRIMAVERA = 10%
let check = confirm("¿Tenes algun cupon descuento para aplicar?")

// Variables para calculos del descuento
let messi = 0.50;
let foressi = 0.30;
let primavera = 0.10;
let descuento = 0;

if(check != 0) {
    // CUPONES --> MESSI = 50%, FORESSI = 30%, PRIMAVERA = 10%
    cupon = prompt("Ingresa el cupon aca abajo").toUpperCase();
    switch(cupon){
    // En caso de que el valor inicial no sea correcto, se comunica que el producto no esta disponible
        case 'MESSI':
            console.log("Felicidades! Cupon del 50% aplicado");
            descuento = calculoDescuento(final, messi);
            console.log("Precio Total tras aplicar el descuento es de: ", descuento);
            break;
        case 'FORESSI':
            console.log("Felicidades! Cupon del 30% aplicado");
            descuento = calculoDescuento(final, foressi);
            console.log("Precio Total tras aplicar el descuento es de: ", descuento);
            break;
        case 'PRIMAVERA':
            console.log("Felicidades! Cupon del 10% aplicado");
            descuento = calculoDescuento(final, foressi);
            console.log("Precio Total tras aplicar el descuento es de: ", descuento);
            break;
        // En caso de que el valor inicial no sea correcto, se comunica que el producto no esta disponible
        default:
            console.log("Cupon invalido, gracias por realizar la compra.")
            break;
    }

}else {
    console.log("Muchas gracias por realizar la compra");
}

// Funciones de calculo para el codigo

function calculoAdicional(costo) {
    let resultado = 0;
    
    // Calculamos el 10% del producto
    resultado = costo / 10;

    // Devolvemos el resultado de la division
    return resultado;
}

function calculoPrecioFinal(pfinal, a) {
    // Calculamos el 10% para despues calcular el precio final
    precioFinal = pfinal + a;

    return precioFinal;
}

function calculoDescuento(monto, b) {
    let desc = 0;
    let caldesc = 0;

    // Aplicamos el descuento al precio total en caso de que haya cupon.
    caldesc = monto * b;
    desc = monto - caldesc;

    return desc;
}


