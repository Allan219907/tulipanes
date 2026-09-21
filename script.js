const btnInicio = document.getElementById("btnInicio");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musica");


btnInicio.addEventListener("click", () => {

    inicio.classList.remove("activa");

    contenido.classList.add("activa");

});


btnMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();

        btnMusica.innerHTML = "❚❚ Pausar";

    } else {

        musica.pause();

        btnMusica.innerHTML = "♫ Reproducir";

    }

});