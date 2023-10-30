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
        Swal.fire({
            title: 'Registro',
            text: 'Tenes que completar todo para registrarte.',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
          })
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
    Swal.fire({
        title: 'Confirmar Registro',
        text: '¿Queres registrarte como Miembro?',
        icon: 'question',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Rechazar'
      }).then((resultado) => {
        if(resultado.isConfirmed) {
            let formulario = e.target;
            arrayUsuarios.push(new Usuario(nombreUser, mailUser, motivoUser));
        }
      })
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

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_5jvdc2u';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Confirmar';
      Swal.fire({
          title: 'Registro',
          text: 'Registro Completado!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        })
    }, (err) => {
      btn.value = 'Confirmar';
      Swal.fire({
          title: 'Registro',
          text: 'Error Al Registrarse',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        })
    });
});

