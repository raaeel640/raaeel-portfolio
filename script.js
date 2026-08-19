const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        const submitButton = contactForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
    });
}
