const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Agregar evento de clic a cada enlace <a>
const enlaces = document.querySelectorAll("#nav a");
    enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
    nav.classList.remove("visible");
    });
});