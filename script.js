const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// FIX: Make dropdowns work on mobile (click instead of hover)
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    const btn = drop.querySelector(".drop-btn");

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // close others
        dropdowns.forEach(d => {
            if (d !== drop) d.querySelector(".dropdown-menu").style.display = "none";
        });

        const menu = drop.querySelector(".dropdown-menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});