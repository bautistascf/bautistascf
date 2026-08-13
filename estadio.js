/* =========================================================
   BAUTISTAS CF · BAUTISTAS ARENA
   ESTADIO.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PUNTOS DEL MAPA
    ===================================================== */

    const puntos = document.querySelectorAll(".mapa-punto");

    puntos.forEach((punto) => {

        punto.addEventListener("click", () => {

            /* Cerramos cualquier información abierta */
            document.querySelectorAll(".mapa-info").forEach((info) => {
                info.classList.remove("info-activa");
            });

            /* Buscamos la información asociada */
            const idInfo = punto.dataset.info;

            if (!idInfo) return;

            const info = document.getElementById(idInfo);

            if (!info) return;

            /* Mostramos la información */
            info.classList.add("info-activa");

        });

    });


    /* =====================================================
       CERRAR INFORMACIÓN AL HACER CLICK FUERA
    ===================================================== */

    document.addEventListener("click", (evento) => {

        if (
            !evento.target.closest(".mapa-punto") &&
            !evento.target.closest(".mapa-info")
        ) {

            document.querySelectorAll(".mapa-info").forEach((info) => {
                info.classList.remove("info-activa");
            });

        }

    });


    /* =====================================================
       ANIMACIÓN AL HACER SCROLL
    ===================================================== */

    const elementos = document.querySelectorAll(".reveal");

    const observarElementos = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observarElementos.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elementos.forEach((elemento) => {
        observarElementos.observe(elemento);
    });


    /* =====================================================
       EFECTO SUAVE EN EL MAPA
    ===================================================== */

    const mapa = document.querySelector(".mapa-estadio");

    if (mapa) {

        mapa.addEventListener("mousemove", (evento) => {

            const rect = mapa.getBoundingClientRect();

            const x =
                (evento.clientX - rect.left) /
                rect.width;

            const y =
                (evento.clientY - rect.top) /
                rect.height;

            const movimientoX = (x - 0.5) * 8;
            const movimientoY = (y - 0.5) * 8;

            mapa.style.transform =
                `scale(1.02) translate(${movimientoX}px, ${movimientoY}px)`;

        });


        mapa.addEventListener("mouseleave", () => {

            mapa.style.transform =
                "scale(1) translate(0, 0)";

        });

    }


    /* =====================================================
       EFECTO HOVER EN LOS PUNTOS
    ===================================================== */

    puntos.forEach((punto) => {

        punto.addEventListener("mouseenter", () => {

            punto.style.zIndex = "50";

        });

        punto.addEventListener("mouseleave", () => {

            punto.style.zIndex = "10";

        });

    });


    /* =====================================================
       ESC PARA CERRAR INFORMACIÓN
    ===================================================== */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            document.querySelectorAll(".mapa-info").forEach((info) => {
                info.classList.remove("info-activa");
            });

        }

    });

});