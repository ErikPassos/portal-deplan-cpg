// =============================
// MENU RESPONSIVO
// =============================

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });

}

// Fecha o menu ao clicar em um link (mobile)

const links = document.querySelectorAll("#mainNav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            mainNav.classList.remove("open");

        }

    });

});