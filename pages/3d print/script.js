const sliderLeft = document.querySelector(".arrow-container_left");
const sliderRight = document.querySelector(".arrow-container_right");
const sliderImg = document.getElementById("sliderImg");
let iterator = 1;
const firstSlide = 1;
const lastSlide = 9;
sliderLeft.addEventListener("click", () => {
    iterator === firstSlide ? (iterator = lastSlide) : iterator--;
    sliderImg.src = "../../images/" + iterator.toString() + ".JPG";
});

sliderRight.addEventListener("click", () => {
    iterator === lastSlide ? (iterator = firstSlide) : iterator++;
    sliderImg.src = "../../images/" + iterator.toString() + ".JPG";
});
