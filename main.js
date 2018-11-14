// Get modal element
var modal = document.getElementById('simpleModal');

//  Get Open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click event
modalBtn.addEventListener('click', openModal);

// Listen for close click event
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function open modal
function openModal() {
    modal.style.display = 'block';
}

// Function close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if clicked outside
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}