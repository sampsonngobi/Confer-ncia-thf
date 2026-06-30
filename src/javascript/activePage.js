export function setActivePage() {

    const currentPath =
        window.location.pathname;

    const links =
        document.querySelectorAll(".nav-links a");

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (
            currentPath === href ||
            (
                currentPath === "/" &&
                href === "/"
            )
        ) {
            link.classList.add("active");
        }

    });

}