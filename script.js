// Toggle navigation
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Mission Statement Modal
const missionButton = document.getElementById("mission-button");
const missionModal = document.getElementById("mission-modal");
const modalClose = document.getElementById("modal-close");

missionButton.addEventListener("click", () => {
    missionModal.style.display = "flex"; // show modal
});

// Close modal when clicking the "x"
modalClose.addEventListener("click", () => {
    missionModal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
    if (e.target === missionModal) {
        missionModal.style.display = "none";
    }
});