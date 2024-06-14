document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const buttonContainer = document.getElementById('buttonContainer');

    // Cargar los botones guardados al iniciar
    loadButtons();

    // Agregar o editar un botón
    addButton.addEventListener('click', function() {
        const existingButton = document.querySelector('.dynamicButton');
        if (existingButton) {
            const newText = prompt('Editar el texto del botón:', existingButton.textContent);
            if (newText) {
                existingButton.textContent = newText;
                saveButtons();
            }
        } else {
            const buttonText = prompt('Ingrese el texto para el nuevo botón:');
            if (buttonText) {
                createButton(buttonText);
                saveButtons();
            }
        }
    });

    // Crear un botón con el texto dado y una clase específica
    function createButton(text) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = 'block copyButton2 button dynamicButton'; // Se agregan múltiples clases al botón
        button.id = 'CustomButton'; // Asigna el id al botón creado
        button.addEventListener('click', function() {
            copyToClipboard(button.textContent); // Se actualiza para usar el texto actual del botón
        });
        buttonContainer.appendChild(button);
    }

    // Guardar los botones en localStorage
    function saveButtons() {
        const buttons = document.querySelectorAll('.dynamicButton');
        const buttonTexts = Array.from(buttons).map(button => button.textContent);
        localStorage.setItem('buttons', JSON.stringify(buttonTexts));
    }

    // Cargar los botones guardados desde localStorage
    function loadButtons() {
        let buttons = localStorage.getItem('buttons');
        if (buttons) {
            buttons = JSON.parse(buttons);
            buttons.forEach(createButton);
        }
    }

    // Copiar texto al portapapeles
    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }

    // Actualizar el texto del botón agregar/editar
    function updateAddButtonText() {
        const existingButton = document.querySelector('.dynamicButton');
        if (existingButton) {
            addButton.textContent = 'Editar Botón';
        } else {
            addButton.textContent = 'Agregar Botón';
        }
    }

    // Llamar a la función para actualizar el texto del botón cuando se carga la página
    updateAddButtonText();
});

// Añadir un event listener para la tecla F8
document.addEventListener('keydown', function(event) {
    if (event.key === 'v') {
        const customButton = document.getElementById('CustomButton');
        if (customButton) {
            customButton.click();
        } else {
            console.log('No se encontró el botón con id CustomButton.');
        }
    }
});
