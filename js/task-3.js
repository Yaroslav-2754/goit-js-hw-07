const textInput = document.querySelector("#name-input");
const header = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if(!event.currentTarget.value) {
        header.textContent = 'Anonymous'
    } else {
        header.textContent = event.currentTarget.value.trim();
    }
});