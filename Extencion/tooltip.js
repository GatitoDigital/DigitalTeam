// Objeto que contiene los textos de los tooltips según la ID del botón
const tooltips = {
    copyButton1: 'Deberá presentarse en la Sede Central, ubicada en la calle Pavón 1779.',
    copyButton6: 'Solicitud Certificado Único de Discapacidad - Nro. de Trámite X.',
    copyButton2: `Contiene el speach que utilizamos para otorgar un turno.`,
    copyButton5: `Contiene el speach que utilizamos para reprogramar un turno.`,
    addButton: 'El boton que crees o edites se copiara automaticamente presionando F8',
    CustomButton: 'Puedes copiar automaticamente este boton presionando la tecla F8'
    // Agrega más tooltips aquí según sea necesario
};

// Función para mostrar el tooltip
function showTooltip(event, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
    updateTooltipPosition(event);
}

// Función para ocultar el tooltip
function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

// Función para actualizar la posición del tooltip según la posición del mouse
function updateTooltipPosition(event) {
    const tooltip = document.getElementById('tooltip');
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const mouseY = event.clientY + window.scrollY;

    // Si el tooltip está demasiado cerca del borde inferior de la ventana, muévelo hacia arriba
    if (mouseY + tooltipRect.height > viewportHeight) {
        tooltip.style.top = (event.pageY - tooltipRect.height) + 'px';
    } else {
        tooltip.style.top = event.pageY + 'px';
    }

    tooltip.style.left = event.pageX + 'px';
}

// Obtener todos los botones
const buttons = document.querySelectorAll('.button');

// Agregar eventos para mostrar y ocultar el tooltip
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const text = e.target.querySelector('p').innerText;
        copyToClipboard(text);
    });

    button.addEventListener('mouseenter', e => {
        const buttonId = e.target.id;
        const text = tooltips[buttonId]; // Buscar el texto del tooltip según la ID del botón
        if (text) {
            showTooltip(e, text);
        }
    });

    button.addEventListener('mouseleave', hideTooltip);
});

// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
