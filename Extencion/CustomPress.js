document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('CustomButton');
  
  // Definir la función del botón
  function customButtonFunction() {
    console.log('Botón CustomButton presionado');
    // Aquí puedes añadir el código que necesites ejecutar
  }

  if (button) {
    button.addEventListener('click', customButtonFunction);
  } else {
    console.log('No se encontró el botón con id CustomButton');
  }

  // Escuchar mensajes del background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "executeCustomButton") {
      customButtonFunction();
      sendResponse({result: "Button function executed"});
    }
  });
});
