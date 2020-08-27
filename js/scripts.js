let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents form submit event(e) from sending data.
    createItem(ourField.value);
});

function createItem(x) {
    let ourHTML = `<li>${x}<button id="delete-btn" class="btn btn-secondary" onclick="deleteItem(this)">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", ourHTML);
    ourField.value = "";
    ourField.focus();
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}