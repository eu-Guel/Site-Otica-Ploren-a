document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".tab-link");
    const sections = document.querySelectorAll(".tab-content");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Removendo 'active' de todas as abas
            links.forEach(l => l.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            // Ativando a aba clicada
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
            this.classList.add("active");
        });
    });
});
