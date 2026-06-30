import { loadComponent } from "./loader.js";
import { initializeNavigation } from "./navigation.js";
import { setActivePage } from "./activePage.js";
import { startCountDown } from "./countdown.js";
import { startCarousel } from "./carousel.js";


async function initializeSite() {

    await loadComponent(
        "#header",
        "/src/components/header.html"
    );

    await loadComponent(
        "#footer",
        "/src/components/footer.html"
    );

    initializeNavigation();
    setActivePage();

    const conferenceDate = new Date("2026-07-25T09:00:00");
    startCountDown(conferenceDate);

    startCarousel();
}

initializeSite();