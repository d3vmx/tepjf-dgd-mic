document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('myVideo');
        if (video.playing) {
        } else {
            video.play();
        }
    }
});
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Evita el zoom
    }
}, { passive: false });