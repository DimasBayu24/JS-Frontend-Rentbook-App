// Get the modal
let editModal = document.getElementById("editModal");

// Get the button that opens the modal
let editBtn = document.getElementById("edit");

// Get the <span> element that closes the modal
let editSpan = document.getElementsByClassName("edit-close")[0];

// When the user clicks the button, open the modal 
editBtn.onclick = function () {
    editModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
editSpan.onclick = function () {
    editModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}