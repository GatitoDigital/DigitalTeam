document.addEventListener('DOMContentLoaded', function () {
    // Verificamos si hay un último usuario guardado en el almacenamiento local
    const ultimoUsuario = localStorage.getItem('ultimoUsuario');

    // Si hay un último usuario guardado, lo utilizamos como nombre predeterminado
    const nombrePredeterminado = ultimoUsuario ? ultimoUsuario : '';

    // Preguntamos al usuario su nombre al abrir la extensión
    const nombre = prompt("Ingresa tu nombre:", nombrePredeterminado);
    if (nombre !== null && nombre.trim() !== '') {
        // Guardamos el nombre del usuario en el almacenamiento local
        localStorage.setItem('ultimoUsuario', nombre);

        // Configuramos los eventos de clic en los botones
        document.getElementById('copyButton1').addEventListener('click', function () {
            const mensaje = `Deberá presentarse en la Sede Central, ubicada en la calle Pavón 1779.\n\nLa atención en la Sede Central es por turno, le dejamos el link para que pueda gestionarlo:\n- Si es ordinario: https://formulario-sigeci.buenosaires.gob.ar/InicioTramiteComun?idPrestacion=5165\n- Si es amparo: https://formulario-sigeci.buenosaires.gob.ar/InicioTramiteComun?idPrestacion=5166`;
            copyToClip(mensaje.replace('Matías', nombre));
        });

        document.getElementById('copyButton2').addEventListener('click', function () {
            solicitarEdad();
        });

        document.getElementById('copyButton3').addEventListener('click', function () {
            const ahora = new Date();
            const hora = ahora.getHours();
            let text;
            if (hora < 13) {
                text = `Buenos días, mi nombre es ${nombre};\n¿En qué puedo ayudarte?`;
            } else {
                text = `Buenas tardes, mi nombre es ${nombre};\n¿En qué puedo ayudarte?`;
            }
            copyToClip(text);
        });

        document.getElementById('copyButton4').addEventListener('click', function () {
            const text = `Quedamos a su disposición ante las consultas que desee realizarnos. Saludos 😊`;
            copyToClip(text);
        });

        // Actualizamos el contenido del span con el nombre ingresado por el usuario
        document.querySelectorAll('#namePlaceholder').forEach(function(element) {
            element.textContent = nombre;
        });

        // Mostramos el mensaje de bienvenida con el nombre del usuario
        document.getElementById('welcomeMessage').textContent = `¡Bienvenido, ${nombre}!`;
    } else {
        // Si el usuario no ingresa un nombre, mostramos un mensaje de advertencia
        alert("Debes ingresar un nombre para poder utilizar la extensión.");
    }
});

function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
}

function solicitarEdad() {
    // Obtener la hora actual del sistema
    const horaActual = new Date().getHours();

    // Definir la variable de saludo
    let saludo;

    // Determinar si es por la mañana (antes de las 13:00) o por la tarde
    if (horaActual < 13) {
        saludo = 'Buen día';
    } else {
        saludo = 'Buenas tardes';
    }

    // Solicitar la edad al usuario
    var edad = prompt(`ingresa la edad del solicitante:`);

    // Verificar si se proporcionó una edad válida
    if (edad !== null && !isNaN(edad) && edad.trim() !== '') {
        // Convertir la edad a número entero
        edad = parseInt(edad);

        // Si es menor de edad, solicitar la fecha y hora del turno
        {
            var fechaTurno = prompt("Ingresa la fecha y hora del turno (Ejemplo: 07/03/2024 a las 11:00hs)");
        }

        // Solicitar el nombre de la junta
        var nombreJunta = prompt("Ingresa el nombre y numero de la junta (Ejemplo: MEDICA N°3R)");

        // Generar el mensaje según la edad
        var mensaje;
        if (edad >= 18) {
            // Mensaje para mayores de edad
            mensaje = `${saludo}, mi nombre es ${nombre};\n\nMe comunico con usted acerca de su trámite de solicitud del Certificado Único de Discapacidad (CUD).\nEl turno asignado corresponde al día ${fechaTurno}, con la Junta Evaluadora ${nombreJunta}.\nLa Junta Evaluadora se encuentra ubicada en la calle Piedras 1281, CABA.\n*Recuerde que la persona a evaluar debe asistir el día del turno, en lo posible concurrir 15 minutos antes.\n\n...`; // Aquí continuarías con el resto del mensaje
        } else {
            // Mensaje para menores de edad
            mensaje = `${saludo}, mi nombre es ${nombre};\n\nMe comunico con usted acerca de su trámite de solicitud del Certificado Único de Discapacidad (CUD).\nEl turno asignado corresponde al día ${fechaTurno}, con la Junta Evaluadora ${nombreJunta}.\nLa Junta Evaluadora se encuentra ubicada en la calle Piedras 1281, CABA.\n*Recuerde que la persona a evaluar debe asistir el día del turno, en lo posible concurrir 15 minutos antes.\n\n...`; // Aquí continuarías con el resto del mensaje
        }

        // Copiar el mensaje al portapapeles
        copyToClip(mensaje);

    } else {
        // Si no se proporcionó una edad válida
        alert('La edad ingresada es inválida.');
    }
}

// Función para abrir el popup
function openPopup() {
    // Abre un popup con la URL especificada
    window.open('chat.html', 'Popup', 'width=300,height=300');
}
