const circles = document.querySelectorAll(".circle");
const modal = document.getElementById("idModal");
const btnCerrar = document.querySelector(".close");
const btnReservar = document.getElementById("btnReservar");
const btnComprar = document.getElementById("btnComprar");
const circleIdSpan = document.getElementById("circleId");
const circleStatusSpan = document.getElementById("circleStatus");
let currentCircle;

function mostrarModal(circle, index) {
    currentCircle = circle;
    circleIdSpan.textContent = index + 1;
    circleStatusSpan.textContent = circle.dataset.status.charAt(0).toUpperCase() + circle.dataset.status.slice(1);
    modal.style.display = "block";
}

function cerrarmodal() {
    modal.style.display = "none";
}

btnCerrar.addEventListener("click", cerrarmodal);

btnReservar.addEventListener("click", () => {
    if (currentCircle) {
        currentCircle.dataset.status = "reservado";
        currentCircle.classList.add("reservado");
        currentCircle.classList.remove("disponible");
        currentCircle.classList.remove("comprado");
        cerrarmodal();
    }
});

btnComprar.addEventListener("click", () => {
    if (currentCircle) {
        currentCircle.dataset.status = "comprado";
        currentCircle.classList.add("comprado");
        currentCircle.classList.remove("disponible");
        currentCircle.classList.remove("reservado");
        cerrarmodal();
    }
});

circles.forEach((circle, index) => {
    circle.classList.add("disponible");

    circle.addEventListener("click", () => {
        const estado = circle.dataset.status;

        if (estado === "disponible" || estado === "reservado") {
            mostrarModal(circle, index);
        } else if (estado === "comprado") {
            alert("Este asiento ya está comprado.");
        }
    });
});
