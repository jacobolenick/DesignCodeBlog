const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
let currentIndex = 0;

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}