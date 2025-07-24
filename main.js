window.onload = function () {
AOS.init({
    once: true,
    duration: 700,
    offset: 100,
  });

  const autoGallery = document.getElementById("autoGallery");
  const images = [
    "img/i - 2025-07-24T190459.232.webp",
    "img/i - 2025-07-10T183205.436.webp",
    "img/i - 2025-07-10T183215.329.webp",
    "img/i - 2025-07-10T183222.580.webp",
    "img/i - 2025-07-10T183231.241.webp",
    "img/i - 2025-07-10T184135.149.webp"
  ];

let current = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");

let sliderInterval;

function updateSlider() {
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = images[current];
    sliderImage.style.opacity = 1;
  }, 300);
}

function showNext() {
  current = (current + 1) % images.length;
  updateSlider();
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  updateSlider();
}

function startAutoSlide() {
  sliderInterval = setInterval(showNext, 4000);
}

function stopAutoSlide() {
  clearInterval(sliderInterval);
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

startAutoSlide();
}