
let username;
let usersurname;
let email;
let checkbox;
let password1;
let password2;
const button = document.getElementById('regBtn');


const validador = ()
// //La contraseña debe tener al menos 6 caracteres.


// const minChar = () => {
//     if (password1.length < 6) {
//         return false
//     }
//     return true
// }

//Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
// const passwordFunction = () => {
//     console.log(password1.value, password2.value);
//     if (password1 !== password2) {
//         showAlertError()

//         return false
//     }

//     return true
// }


//Ningún campo puede estar vacío.
const emptyValues = (username, usersurname, email, password1, password2) => {

    if (username === '' || usersurname === '' || email === '' || password1 === '' || password2 === '') {
        console.log("Hay uno o mas vacio/s")
        return false;
    } else {
        console.log("Todos llenos")
        return true;
    }
};



button.addEventListener('click', (e) => {

    e.preventDefault();

    username = document.getElementById('nombre').value;
    usersurname = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    checkbox = document.getElementById('checkbox-terms').value;
    password1 = document.getElementById('password1').value;
    password2 = document.getElementById('password2').value;

    
    emptyValues(username, usersurname, email, password1, password2);

});


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}