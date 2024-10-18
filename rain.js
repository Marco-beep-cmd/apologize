document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById("rain-container");

    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");

        // Añadir el emoji de rosa 🌹
        rose.textContent = "🌹"; 

        // Posiciona la rosa en un lugar aleatorio en la parte superior
        rose.style.left = Math.random() * window.innerWidth + "px";
        rose.style.animationDuration = 3 + Math.random() * 2 + "s"; // Duración de caída aleatoria
        rose.style.opacity = Math.random(); // Transparencia aleatoria

        rainContainer.appendChild(rose);

        // Elimina la rosa después de que caiga
        setTimeout(() => {
            rose.remove();
        }, 5000);
    }

    // Crear rosas constantemente
    setInterval(createRose, 300);
});
 // text-change.js

 //window.addEventListener('DOMContentLoaded', (event) => {
    //const phrases = [
       //"Tal vez me equivoque o si me equivoque", // Primera frase
       //"Perdoname",           // Segunda frase
      //"No gustar que estes enojada ni triste", // Tercera frase
       //"Espero que estes bien",
        //"Perdon, pero yo me creo un drama",
        //"Te dije que esta amistad para mi es linda y algo fria xd",
        //"No quiero que estes molesta por la estupidez que hice",
        //"Recibe el gatito del perdón :(",
        //"Y dame tu respuesta",
        //"Entendere el si y el no...",
        //"Me perdonas?...😔"
    //];

    //let index = 0;
    //const textElement = document.getElementById('changing-text');

    // Cambiar frase cada 3 segundos (3000 milisegundos)
    //setInterval(() => {
        //index = (index + 1) % phrases.length; // Cambiar el índice de la frase
        //textElement.textContent = phrases[index]; // Actualizar el texto
    //}, 5000); // Cambia el texto cada 3 segundos
//});
// music.js

window.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');

    // Verificar si ya se estaba reproduciendo música previamente
    if (localStorage.getItem('music-playing') === 'true') {
        music.play();
    }

    // Cuando el usuario cambia de página
    const links = document.querySelectorAll('.navigate');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = e.target.getAttribute('href');
            
            // Guardar el estado de la música antes de cambiar de página
            localStorage.setItem('music-playing', 'true');
            
            // Ir a la nueva página
            window.location.href = url;
        });
    });
});
window.addEventListener('DOMContentLoaded', (event) => {
    // Esperar 10 segundos antes de mostrar los botones
    setTimeout(() => {
        const buttons = document.getElementById('buttons');
        buttons.style.display = 'block'; // Mostrar los botones
    }, 30000); // 10,000 milisegundos = 10 segundos
});