const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// MOBILE DROPDOWN CLICK
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    const btn = drop.querySelector(".drop-btn");

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const menu = drop.querySelector(".dropdown-menu");

        menu.style.display =
            menu.style.display === "block" ? "none" : "block";
    });
});