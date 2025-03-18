// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/**
 * inserta amigo-añadir-insertar amigo.
 * verifica el ingreso de amigo-permite ver lista.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("ingresa un nombre de tus amigos");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * visualizacion lista de amigos en el DOM.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Sortea aleatorio de amigos.
 * alerta de lista sin ingreso para realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("ingresa un nombre de un amigo para iniciar el sorteo, así conoceras tu amigo secreto");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}


function reiniciarJuego() {
    participantes = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}

// Evento para el botón de reinicio
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
    document.getElementById("reiniciarBtn").addEventListener("click", reiniciarJuego);
});