document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const confirmationMessage = document.createElement("p");
    confirmationMessage.style.color = "green";
    form.appendChild(confirmationMessage);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            confirmationMessage.textContent = "Merci pour votre message, " + name + "! Votre message a été envoyé avec succès.";
            form.reset();
        } else {
            confirmationMessage.textContent = "Veuillez remplir tous les champs.";
            confirmationMessage.style.color = "red";
        }
    });
});