const btnInicio = document.getElementById("btnInicio");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const btnConfeti = document.getElementById("btnConfeti");
const confetiContainer = document.getElementById("confeti-container");


// ==========================================
// BOTÓN INICIAL
// ==========================================

btnInicio.addEventListener("click", () => {

    inicio.classList.remove("activa");

    contenido.classList.add("activa");

});


// ==========================================
// BOTÓN CONFETI
// ==========================================

btnConfeti.addEventListener("click", () => {

    lanzarConfeti();

});


// ==========================================
// CREAR CONFETI
// ==========================================

function lanzarConfeti() {

    // Colores relacionados con los tulipanes
    const colores = [
        "#f5cf45",
        "#ffe76b",
        "#f2bf22",
        "#7eae55",
        "#487b38",
        "#ffffff"
    ];


    // Cantidad de confetis
    const cantidad = 120;


    for (let i = 0; i < cantidad; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confeti");


        // Posición horizontal aleatoria
        confeti.style.left =
            Math.random() * 100 + "vw";


        // Color aleatorio
        confeti.style.backgroundColor =
            colores[
                Math.floor(
                    Math.random() * colores.length
                )
            ];


        // Tamaño aleatorio
        const tamaño =
            Math.random() * 7 + 6;

        confeti.style.width =
            tamaño + "px";

        confeti.style.height =
            tamaño * 1.5 + "px";


        // Duración aleatoria
        const duracion =
            Math.random() * 2 + 3;

        confeti.style.animationDuration =
            duracion + "s";


        // Retraso aleatorio
        const retraso =
            Math.random() * 0.8;

        confeti.style.animationDelay =
            retraso + "s";


        // Rotación inicial
        confeti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        confetiContainer.appendChild(confeti);


        // Eliminar el confeti después
        setTimeout(() => {

            confeti.remove();

        }, (duracion + retraso) * 1000);

    }

}