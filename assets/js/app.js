
/* =================================
   OURPIN — MAIN JAVASCRIPT
================================= */

// Display the current date automatically
function updateDate() {
    const dateElement = document.getElementById("current-date");

    if (!dateElement) return;

    const today = new Date();

    const formattedDate = new Intl.DateTimeFormat("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(today);

    dateElement.textContent = formattedDate;
}

// Initialise OurPin
function initialiseOurPin() {
    updateDate();
}

// Run when the page is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseOurPin);
} else {
    initialiseOurPin();
}
