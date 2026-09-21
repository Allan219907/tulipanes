const btnInicio = document.getElementById("btnInicio");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const btnMusica = document.getElementById("btnMusica");

let player = null;
let reproduciendo = false;
let primeraReproduccion = true;


// ==========================================
// BOTÓN "PRESIONA AQUÍ"
// ==========================================

btnInicio.addEventListener("click", () => {

    inicio.classList.remove("activa");
    contenido.classList.add("activa");

});


// ==========================================
// API DE YOUTUBE
// ==========================================

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtube-player", {

        height: "120",
        width: "200",

        // Lo único que quiero
        videoId: "XnyXgmq9Rpg",

        playerVars: {
            controls: 0,
            rel: 0,
            playsinline: 1
        },

        events: {

            onReady: function () {
                console.log("YouTube listo correctamente.");
            },

            onStateChange: function (event) {

                // REPRODUCIENDO
                if (event.data === YT.PlayerState.PLAYING) {

                    reproduciendo = true;
                    btnMusica.innerHTML = "❚❚ Pausar";

                }

                // PAUSADO
                else if (event.data === YT.PlayerState.PAUSED) {

                    reproduciendo = false;
                    btnMusica.innerHTML = "♫ Reproducir";

                }

                // FINALIZADO
                else if (event.data === YT.PlayerState.ENDED) {

                    reproduciendo = false;
                    primeraReproduccion = true;

                    btnMusica.innerHTML = "♫ Reproducir";

                }

            },

            onError: function (event) {

                console.error(
                    "Error del reproductor de YouTube:",
                    event.data
                );

            }

        }

    });

}


// ==========================================
// BOTÓN REPRODUCIR / PAUSAR
// ==========================================

btnMusica.addEventListener("click", () => {

    if (!player || typeof player.playVideo !== "function") {

        console.log("El reproductor de YouTube todavía no está listo.");

        return;

    }


    // REPRODUCIR
    if (!reproduciendo) {

        // La primera vez empieza en 1:30
        if (primeraReproduccion) {

            player.seekTo(0, true);

            primeraReproduccion = false;

        }

        player.playVideo();

    }


    // PAUSAR
    else {

        player.pauseVideo();

    }

});