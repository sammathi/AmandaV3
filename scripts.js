// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById('modalImg');
var captionText = document.getElementById('caption');

// function to open the modal with the clicked image
function openModal(src) {
    modal.style.display = "block";
    modalImg.src = src;
//    captionText.innerHTML = src;
}

// function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user presses the ESC key, close the modal
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
