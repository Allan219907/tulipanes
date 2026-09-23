const btnInicio = document.getElementById("btnInicio");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const btnConfeti = document.getElementById("btnConfeti");
const confetiContainer = document.getElementById("confeti-container");

const btnMusica = document.getElementById("btnMusica");


// ==========================================
// VARIABLES DE YOUTUBE
// ==========================================

let player = null;
let reproduciendo = false;


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

    const colores = [
        "#f5cf45",
        "#ffe76b",
        "#f2bf22",
        "#7eae55",
        "#487b38",
        "#ffffff"
    ];


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


// ==========================================
// YOUTUBE
// ==========================================

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtube-player", {

        width: "320",
        height: "180",

        // Acércame a Ti - instrumental
        videoId: "rYbhlNaSSSM",

        playerVars: {

            controls: 0,
            rel: 0,
            playsinline: 1

        },

        events: {

            onReady: function () {

                console.log("YouTube listo.");

            },


            onStateChange: function (event) {

                // REPRODUCIENDO
                if (event.data === YT.PlayerState.PLAYING) {

                    reproduciendo = true;

                    btnMusica.innerHTML =
                        "❚❚ Pausar";

                }


                // PAUSADO
                else if (event.data === YT.PlayerState.PAUSED) {

                    reproduciendo = false;

                    btnMusica.innerHTML =
                        "♫ Reproducir";

                }


                // TERMINÓ LA CANCIÓN
                else if (event.data === YT.PlayerState.ENDED) {

                    reproduciendo = false;

                    btnMusica.innerHTML =
                        "♫ Reproducir";

                }

            },


            onError: function (event) {

                console.error(
                    "Error de YouTube:",
                    event.data
                );

                reproduciendo = false;

                btnMusica.innerHTML =
                    "♫ Reproducir";

            }

        }

    });

}


// ==========================================
// BOTÓN REPRODUCIR / PAUSAR
// ==========================================

btnMusica.addEventListener("click", () => {

    // Verificar que YouTube ya cargó
    if (
        !player ||
        typeof player.playVideo !== "function"
    ) {

        console.log(
            "El reproductor todavía está cargando..."
        );

        return;

    }


    // REPRODUCIR
    if (!reproduciendo) {

        player.playVideo();

    }


    // PAUSAR
    else {

        player.pauseVideo();

    }

});