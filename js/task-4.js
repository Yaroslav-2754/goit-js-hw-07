const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();

    const formData = event.target;
    const email = formData.elements.email.value.trim();
    const password = formData.elements.password.value.trim();

    if(!email || !password) {
        alert('All form fields must be filled in')
        return
    }

    console.log({ email, password })
    
    form.reset()
});

