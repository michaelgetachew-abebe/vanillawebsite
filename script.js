document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("testBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        message.textContent = "✅ JavaScript is working! Deployment successful.";
    });
});
