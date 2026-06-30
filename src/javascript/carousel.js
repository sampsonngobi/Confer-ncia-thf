import { conferenceData } from "../data/conferencedata.js";


let currentSlide = 0;
let interval;

export function startCarousel() {

    const title = document.querySelector("#carousel-title");
    const description = document.querySelector("#carousel-description");
    const content = document.querySelector(".carousel-content");
    const dotsContainer = document.querySelector("#carousel-dots");

    if (!title || !description || !content || !dotsContainer) {
        return;
    }

    conferenceData.slides.forEach((slide, index) => {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

            restartAutoPlay();

        });

        dotsContainer.appendChild(dot);

    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {

        content.classList.add("fade-out");

        setTimeout(() => {

            title.textContent =
                conferenceData.slides[index].title;

            description.textContent =
                conferenceData.slides[index].description;

            const image = document.querySelector("#carousel-image");
            if (image && conferenceData.slides[index].image) {
                image.src = conferenceData.slides[index].image;
            }

            dots.forEach(dot => dot.classList.remove("active"));

            dots[index].classList.add("active");

            content.classList.remove("fade-out");

        }, 300);

    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= conferenceData.slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    function startAutoPlay() {

        interval = setInterval(nextSlide, 5000);

    }

    function restartAutoPlay() {

        clearInterval(interval);

        startAutoPlay();

    }

    const carousel = document.querySelector(".carousel");

    carousel.addEventListener("mouseenter", () => {

        clearInterval(interval);

    });

    carousel.addEventListener("mouseleave", () => {

        startAutoPlay();

    });

    showSlide(currentSlide);

    startAutoPlay();

}