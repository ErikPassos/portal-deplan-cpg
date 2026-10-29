// ====================================
// MODO ESCURO
// ====================================

const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

// Carregar tema salvo
const temaSalvo = localStorage.getItem("theme");

if (temaSalvo === "dark") {
    html.setAttribute("data-theme", "dark");
    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}

// Alternar tema
if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const temaAtual =
            html.getAttribute("data-theme");

        if (temaAtual === "dark") {

            html.removeAttribute("data-theme");

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.textContent = "🌙";

        } else {

            html.setAttribute(
                "data-theme",
                "dark"
            );

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.textContent = "☀️";

        }

    });

}
