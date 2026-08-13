/* =========================================================
   BAUTISTAS ARENA
   TARJETAS INTERACTIVAS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {

        card.addEventListener("click", () => {

            /* Si ya está abierta, la cerramos */
            if (card.classList.contains("selected")) {
                card.classList.remove("selected");
                return;
            }

            /* Cerramos cualquier otra tarjeta */
            featureCards.forEach(otherCard => {
                otherCard.classList.remove("selected");
            });

            /* Activamos la tarjeta pulsada */
            card.classList.add("selected");

        });

    });

});