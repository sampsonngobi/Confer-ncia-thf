export function initializeNavigation() {

    const menuButton =
        document.querySelector("#menu-button");

    const nav =
        document.querySelector("#main-nav");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

}