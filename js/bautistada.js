//==================================================
// HAZ TU BAUTISTADA
//==================================================

document.addEventListener("DOMContentLoaded", () => {

    //==============================================
    // VARIABLES
    //==============================================

    let maxProductos = 0;
    let seleccionados = [];
    let disenoElegido = "";

    const botonesCaja =
        document.querySelectorAll(".seleccionar-caja");

    const botonesProducto =
        document.querySelectorAll(".producto");

    const contador =
        document.getElementById("contador");

    const barra =
        document.getElementById("progreso");

    const botonesDiseno =
        document.querySelectorAll(".elegir-diseno");

    const tarjetasDiseno =
        document.querySelectorAll(".diseno-card");


    //==============================================
    // PASO 1 · ELEGIR TAMAÑO
    //==============================================

    botonesCaja.forEach((boton) => {

        boton.addEventListener("click", () => {

            maxProductos = Number(boton.dataset.max);

            // Reiniciar productos
            seleccionados = [];

            botonesProducto.forEach((producto) => {

                producto.classList.remove("seleccionado");

            });

            // Quitar selección de otros tamaños
            botonesCaja.forEach((b) => {

                b.classList.remove("activo");

                b.textContent = "Elegir";

            });

            // Activar este tamaño
            boton.classList.add("activo");

            boton.textContent = "✓ Seleccionado";

            actualizarContador();

        });

    });


    //==============================================
    // PASO 2 · ELEGIR PRODUCTOS
    //==============================================

    botonesProducto.forEach((producto) => {

        producto.addEventListener("click", () => {

            // Primero hay que elegir tamaño
            if (maxProductos === 0) {

                alert(
                    "Primero elige el tamaño de tu Bautistada."
                );

                return;

            }

            const nombre =
                producto.dataset.producto;


            // SI YA ESTÁ SELECCIONADO → QUITAR

            if (seleccionados.includes(nombre)) {

                seleccionados =
                    seleccionados.filter(
                        (p) => p !== nombre
                    );

                producto.classList.remove(
                    "seleccionado"
                );

            }


            // SI NO ESTÁ → AÑADIR

            else {

                // Comprobar límite

                if (
                    seleccionados.length >=
                    maxProductos
                ) {

                    alert(
                        `Tu Bautistada solo admite ${maxProductos} productos.`
                    );

                    return;

                }

                seleccionados.push(nombre);

                producto.classList.add(
                    "seleccionado"
                );

            }

            actualizarContador();

        });

    });


    //==============================================
    // ACTUALIZAR CONTADOR
    //==============================================

    function actualizarContador() {

        if (!contador || !barra) return;

        contador.classList.remove("completa");

        contador.textContent =
            `${seleccionados.length} / ${maxProductos} productos`;


        if (maxProductos === 0) {

            barra.style.width = "0%";

            return;

        }


        const porcentaje =
            (seleccionados.length /
                maxProductos) * 100;

        barra.style.width =
            porcentaje + "%";


        // BAUTISTADA COMPLETA

        if (
            seleccionados.length ===
            maxProductos
        ) {

            contador.textContent =
                "✔ Bautistada completada";

            contador.classList.add(
                "completa"
            );

        }

    }


    //==============================================
    // PASO 3 · ELEGIR DISEÑO
    //==============================================

    botonesDiseno.forEach((boton) => {

        boton.addEventListener("click", () => {

            // Quitar selección anterior

            tarjetasDiseno.forEach((tarjeta) => {

                tarjeta.classList.remove(
                    "activo"
                );

            });

            botonesDiseno.forEach((b) => {

                b.textContent = "Elegir";

            });


            // Seleccionar este

            const tarjeta =
                boton.closest(".diseno-card");

            tarjeta.classList.add("activo");

            boton.textContent =
                "✓ Seleccionado";


            // Guardar diseño

            disenoElegido =
                boton.dataset.diseno;


            console.log(
                "Diseño seleccionado:",
                disenoElegido
            );

        });

    });

});
