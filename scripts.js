function obtenerFechaTexto() {
  // Creo un objeto fecha
  let fecha = new Date();

  // Creo un array con los días de la semana en texto
  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let diaSemanaTexto = diasSemana[fecha.getDay()];

  // Creo otro array con los meses en texto
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let mesTexto = meses[fecha.getMonth()];

  // Obtengo el día
  let dia = fecha.getDate();

  // Obtengo el año
  let año = fecha.getFullYear();

  // Creo la cadena de texto con la fecha
  let fechaTexto =
    diaSemanaTexto + ", " + dia + " de " + mesTexto + " de " + año;

  // Devuelvo la fecha en formato de texto
  return fechaTexto;
}

// Obtengo el elemento <p> por su ID
let footerFecha = document.getElementById("fechaTexto");

// Llamo a la función y le asigno el resultado al elemento <p>
footerFecha.textContent = obtenerFechaTexto();


// document.getElementById('btnOpenLoginModal').addEventListener('click', function () {
//   var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
//   loginModal.show();
// });



// let loginForm = document.getElementById("registroForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let nombre = document.getElementById("nombre");
//   let apellido = document.getElementById("apellido");
//   let institution = document.getElementById("institution");
//   let email = document.getElementById("email");
//   let contraseña = document.getElementById("contraseña");

//   if (email.value == "" || contraseña.value == "") {
//     // throw error
//   } else {
//     let body = {
//       nombre,
//       apellido,
//       institution,
//       email,
//       contraseña
//     }

//     fetch('http://organizacionesperanzas.netlify.app/api/usuarios',body).then((r) =>{
//       console.log(r);
//     })
//   }
// });