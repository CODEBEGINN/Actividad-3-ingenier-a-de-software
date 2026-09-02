const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();


    // Obtener los datos

    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const asunto =
        document.getElementById("asunto").value.trim();

    const mensaje =
        document.getElementById("mensaje").value.trim();


    // Validar campos obligatorios

    if (!nombre || !correo || !asunto || !mensaje) {

        respuesta.textContent =
            "Todos los campos son obligatorios.";

        return;
    }


    // Validar correo

    const patronCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!patronCorreo.test(correo)) {

        respuesta.textContent =
            "El correo electrónico no es válido.";

        return;
    }


    // Crear objeto con los datos

    const datos = {

        nombre: nombre,

        correo: correo,

        asunto: asunto,

        mensaje: mensaje

    };


    try {

        // Enviar datos al backend

        const respuestaServidor =
            await fetch(
                "https://actividad-3-ingenier-a-de-software.onrender.com/",

                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(datos)
                }
            );


        const resultado =
            await respuestaServidor.json();


        // Verificar respuesta

        if (respuestaServidor.ok) {

            respuesta.textContent =
                "Formulario enviado correctamente.";

            formulario.reset();

        } else {

            respuesta.textContent =
                resultado.mensaje ||
                "Ocurrió un error.";

        }


    } catch (error) {

        console.error(
            "Error al conectar con el servidor:",
            error
        );


        respuesta.textContent =
            "No fue posible conectar con el servidor.";

    }

});