// Dividir el código en módulos
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animal.js";
import consulta_api from "./Api.js";

// Crear las instancias de las clases utilizando los datos del formulario.

let animales = [];
let img = document.getElementById("preview");
let audio = document.getElementById("player");
let registrar = document.getElementById("btnRegistrar");
let nombre = document.getElementById("animal");

registrar.addEventListener("click", async () => {
  let edad = document.getElementById("edad");
  let comentarios = document.getElementById("comentarios");
  let animal;

  if (nombre.value && edad.value && comentarios.value) {
    let datos = await consulta_api.mostrar;

    if (nombre.value == "Leon") {
      animal = new Leon(
        nombre.value,
        edad.value,
        datos.animales[0].imagen,
        comentarios.value,
        datos.animales[0].sonido
      );
    } else if (nombre.value == "Lobo") {
      animal = new Lobo(
        nombre.value,
        edad.value,
        datos.animales[1].imagen,
        comentarios.value,
        datos.animales[1].sonido
      );
    } else if (nombre.value == "Oso") {
      animal = new Oso(
        nombre.value,
        edad.value,
        datos.animales[2].imagen,
        comentarios.value,
        datos.animales[2].sonido
      );
    } else if (nombre.value == "Serpiente") {
      animal = new Serpiente(
        nombre.value,
        edad.value,
        datos.animales[3].imagen,
        comentarios.value,
        datos.animales[3].sonido
      );
    } else if (nombre.value == "Aguila") {
      animal = new Aguila(
        nombre.value,
        edad.value,
        datos.animales[4].imagen,
        comentarios.value,
        datos.animales[4].sonido
      );
    }

    nombre.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = "";
    img.innerHTML = `<img src="">`;
    animales.push(animal);
    mostrarTabla();
  } else {
    alert("Ingresar datos válidos");
  }
});

//Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario
document
  .getElementById("animal")
  .addEventListener("change", function cambiarFoto() {
    let nombre = document.getElementById("animal");
    if (nombre.value == "Leon") {
      preview.style.backgroundImage = "url(./assets/imgs/Leon.png)";
    } else if (nombre.value == "Lobo") {
      preview.style.backgroundImage = "url(./assets/imgs/Lobo.jpg";
    } else if (nombre.value == "Oso") {
      preview.style.backgroundImage = "url(./assets/imgs/Oso.jpg)";
    } else if (nombre.value == "Serpiente") {
      preview.style.backgroundImage = "url(./assets/imgs/Serpiente.jpg)";
    } else if (nombre.value == "Aguila") {
      preview.style.backgroundImage = "url(./assets/imgs/Aguila.png)";
    }
  });

let mostrarTabla = () => {
  let animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";

  animales.forEach((animal, index) => {
    animalesTemplate.innerHTML += `
    <div class="m-2">
      <div data-fighter="${animal.getNombre()}">
        <div>
          <div class="" style="width: 300px">
            <img
              src="./assets/imgs/${animal.getImg()}"
              alt="imagen_animal"
              class="w-75 h-auto"
              onclick="verDatos(${index})"
              data-toggle="modal"
              data-target="#exampleModal"
            />
            <div class="py-1 bg-dark">
              <div class="m-1" id="audio" onclick="sonido(${index})">
              <button type="button" class="btn btn-warning">
              📢
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
  });
};
window.sonido = (entry) => {
  let animal = animales[entry]
  let sonido = animal.getSonido()
  audio.src = `assets/sounds/${sonido}`
  audio.play()
}
window.verDatos = (entry) => {
  let datos = animales[entry]
  let modal = document.getElementById("modalAnimales")
  modal.innerHTML = `
  <div>
    <div>
    <img src="./assets/imgs/${datos.getImg()}" data-bs-placement="bottom" class="w-100 h-auto img-fluid" />
    </div>
    <div class="text-center mt-2">
      <p class="text-white"> Edad: ${datos.getEdad()}</p>
    </div>
    <div class="text-center mt-2 text-white">
      <p>Comentarios</p>
      <p>${datos.getComentarios()}</p>
    </div>
  </div>
    `
}