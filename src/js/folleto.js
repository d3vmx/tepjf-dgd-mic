document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
});

document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
});

document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
});

window.addEventListener("touchstart", touchHandler, false);

function touchHandler(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Evita el zoom
    }
}, { passive: false });
// Abre Google Chrome, copia y pega chrome://flags/#enable-pinch en la barra de direcciones y luego presiona Enter.
// Desplázate hacia abajo, localiza la función de zoom de pellizco (pinch zoom feature) y desactívala.