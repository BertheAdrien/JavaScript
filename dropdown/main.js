const dropdowns = Array.from(document.querySelectorAll(".dropdown-btn"));

dropdowns.map((dropdown) => {
    dropdown.addEventListener("click", function () {
        // Sélection du conteneur du menu déroulant associé au bouton
        const dropdownContainer = dropdown.nextElementSibling;

        // Afficher ou masquer le menu déroulant en changeant sa classe CSS
        dropdownContainer.classList.toggle("show");
    });
});