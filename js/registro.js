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

