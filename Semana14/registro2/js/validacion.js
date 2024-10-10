const button = document.getElementById("register-button");
const form = document.getElementById("form");

const hayCamposVacios = (nombre, apellido, email, password1, password2) => {
  if (nombre.value === "") {
    nombre.classList.add("is-invalid");
    nombre.classList.remove("is-valid");
    const span = document.getElementById("span-nombre");
    span.textContent = "Debe ingresar un nombre correcto";
  } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    const span = document.getElementById("span-nombre");
    span.textContent = "";
  }

  if (apellido.value === "") {
    apellido.classList.add("is-invalid");
    apellido.classList.remove("is-valid");
    const span = document.getElementById("span-apellido");
    span.textContent = "Debe ingresar un apellido correcto";
  } else {
    apellido.classList.remove("is-invalid");
    apellido.classList.add("is-valid");
    const span = document.getElementById("span-apellido");
    span.textContent = "";
  }


  if (!email.checkValidity() || email.value === "") {
    // Si el patrón no coincide, agregar clase 'incorrecto' y remover 'correcto'
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  } else {
    // Si el patrón es correcto, agregar clase 'correcto' y remover 'incorrecto'
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }


  if (password1.value === "") {
    password1.classList.add("is-invalid");
    password1.classList.remove("is-valid");
    const span = document.getElementById("span-password1");
    span.textContent = "Debe ingresar una contraseña correcta";
  } else {
    password1.classList.remove("is-invalid");
    password1.classList.add("is-valid");
    const span = document.getElementById("span-password1");
    span.textContent = "";
  }

  if (password2.value === "") {
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
    const span = document.getElementById("span-password2");
    span.textContent = "Debe ingresar una contraseña correcta";
  } else {
    password2.classList.remove("is-invalid");
    password2.classList.add("is-valid");
    const span = document.getElementById("span-password2");
    span.textContent = "";
  }

  if (
    nombre.value === "" ||
    apellido.value === "" ||
    password1.value === "" ||
    password2.value === ""
  ) {
    return false;
  } else {
    return true;
  }
};

const checkContraseña = (password1, password2) => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    // password2.classList.add("is-invalid");
    // password2.classList.remove("is-valid");
    return true;
  } else {
    const span = document.getElementById("span-password2");
    span.textContent = "Debe ingresar constraseñas iguales";
    return false;
  }
};

const aceptoTerminos = (checkbox) => {
  if (!checkbox.checked) {
    checkbox.classList.add("is-invalid");
    const spanButton = document.getElementById("valid-message");
    console.log("spanButton", spanButton);
    spanButton.textContent = "Debe aceptar términos y condiciones";
    return false;
  } else {
    return true;
  }
};

form.addEventListener("submit", (e) => {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const checkbox = document.getElementById("terminos");

  console.log("checkbox", checkbox.checked);
  e.preventDefault();

  if (
    hayCamposVacios(nombre, apellido, email, password1, password2) &&
    checkContraseña(password1, password2) &&
    aceptoTerminos(checkbox)
  ) {
    alert("Registro exitoso");
  }
});

const allInputs = document.querySelectorAll(".form-control");

allInputs.forEach((element) => {
  element.addEventListener("input", () => {
    hayCamposVacios(
      document.getElementById("nombre"),
      document.getElementById("apellido"),
      document.getElementById("email"),
      document.getElementById("password1"),
      document.getElementById("password2")
    );
  });
});
