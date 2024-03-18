document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const changeNameButton = document.getElementById('change-name-button');
    const changeColorButton = document.getElementById('change-color-button');
    const clearChatButton = document.getElementById('clear-chat-button');
    const STORAGE_KEY = 'chatMessages';
    const MESSAGES_FILE = 'https://docs.google.com/feeds/download/documents/export/Export?id=14c8tvReFT7C87DOYn-b7kW4V4BciaQorrcc-bhaZkfo&exportFormat=txt&access_token=ya29.a0Ad52N3-qN3yGpEuoxzRCfGK4TwtqHFxVKALyn-9e8X7hXmMjqLUIiLHGBrutJlRstdgzNkhhsx9tOJjPOkxtF4frvOLM-zLBKv2Hlfq7C8CQ5TlOtq6T5gTswfotcR5pph2WSCve7uX0IVNRp6j9k0Upus45M5XVkwaCgYKAVMSARMSFQHGX2Mi2Z1o_UB3vJlxxKwjH3TtrA0169';

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    changeNameButton.addEventListener('click', changeUsername);
    changeColorButton.addEventListener('click', showColorPicker);
    clearChatButton.addEventListener('click', clearChat);

    // Cargar mensajes anteriores al cargar la página
    loadMessagesFromFile();

    function loadMessagesFromFile() {
        fetch(MESSAGES_FILE)
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                const messages = data.split('\n');
                messages.forEach(function(message) {
                    const [sender, content] = message.split(':');
                    appendMessage(content.trim(), sender.trim());
                });
            })
            .catch(function(error) {
                console.error('Error al cargar mensajes:', error);
            });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            appendMessage(message, 'Tú');
            saveMessage('Tú', message);
            chatInput.value = '';
        }
    }

function saveMessage(sender, message) {
    const formattedMessage = `${sender}: ${message}\n`;
    fetch(MESSAGES_FILE, {
        method: 'PUT',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: formattedMessage
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Mensaje guardado correctamente');
    })
    .catch(error => {
        console.error('Error al guardar el mensaje:', error);
        appendMessage('El mensaje no se pudo enviar', 'Sistema');
    });
}



    function clearChat() {
        chatBox.innerHTML = '';
    }

    function changeUsername() {
        const newUsername = prompt("Ingresa tu nuevo nombre de usuario:");
        if (newUsername) {
            // Aquí podrías realizar cualquier validación adicional del nombre de usuario
            // y luego actualizar el nombre de usuario en el chat si es necesario
            console.log(`Nombre de usuario cambiado a: ${newUsername}`);
        }
    }

    function showColorPicker() {
        // Aquí podrías mostrar un selector de color para que el usuario elija su color preferido
        // y luego podrías actualizar el color del nombre de usuario en el chat
        console.log("Mostrar selector de color");
    }

    function appendMessage(message, sender) {
        const messageElement = document.createElement('div');
        const usernameElement = document.createElement('span');
        usernameElement.textContent = sender + ': ';
        messageElement.appendChild(usernameElement);
        const textElement = document.createElement('span');
        textElement.textContent = message;
        messageElement.appendChild(textElement);
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
