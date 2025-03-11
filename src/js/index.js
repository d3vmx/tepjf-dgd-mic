// window.addEventListener("beforeunload", (evento) => {
//     if (true) {
//         evento.preventDefault();
//         evento.returnValue = "";
//         return "";
//     }
// });
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Evita el zoom
    }
}, { passive: false });