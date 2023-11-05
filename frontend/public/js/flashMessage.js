function storeFlashMessage(type, message) {
    const flashMessage = { type, message };
    localStorage.setItem('flashMessage', JSON.stringify(flashMessage));
}
function displayFlashMessage() {
    const flashMessage = JSON.parse(localStorage.getItem('flashMessage'));
    if (flashMessage) {
        const flashMessagePlaceholder = document.querySelector("#flashMessageContainer");
        
        flashMessagePlaceholder.innerHTML = '';

        const flashMessageElement = document.createElement('div');
        flashMessageElement.setAttribute("role", "alert");
        flashMessageElement.classList.add('alert', `alert-${flashMessage.type}`, 'alert-dismissible', 'fade', 'show');                
        flashMessageElement.innerHTML = `${flashMessage.message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;        
        flashMessagePlaceholder.appendChild(flashMessageElement);
        localStorage.removeItem('flashMessage');
    }
}

function triggerFlashMessage(type, message) {
    storeFlashMessage(type, message);
    displayFlashMessage();
}