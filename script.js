const buttons = document.querySelector(".buttons");
const slider = document.querySelector(".slider");
const video = document.querySelector("video");
const show_load = document.querySelector(".show_load")


buttons.addEventListener("click", function () {
    slider.classList.toggle("move_right");
    if (slider.classList.contains("move_right")) {
        video.pause();
    } else {
        video.play();
    }
});

window.addEventListener("load", function() {
    show_load.classList.remove("show_load")
})