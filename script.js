
/* 1. Welcome button */
const welcomeButton = document.querySelector("#welcomeButton");
const welcomeMessage = document.querySelector("#message");

if (welcomeButton && welcomeMessage) {
    welcomeButton.addEventListener("click", function () {
        welcomeMessage.textContent =
            "Your website is working! Welcome to BrightWeb.";
    });
}

/* 2. Mobile navigation */
const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
        siteNav.classList.toggle("open");

        const isOpen = siteNav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "Close ✕" : "Menu ☰";
    });
}

/* 3. Contact form */
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName =
            document.querySelector("#customerName").value.trim();

        const customerEmail =
            document.querySelector("#customerEmail").value.trim();

        if (!customerName || !customerEmail) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + customerName +
            "! Your form passed the basic checks.";
    });
}
