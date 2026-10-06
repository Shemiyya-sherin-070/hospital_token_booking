const tokenData = {};
const bookings = new Set();
const bookingForm = document.getElementById("bookingForm");
const errorMessage = document.getElementById("errorMessage");
const currentToken = document.getElementById("currentToken");
const patientTokenCard = document.getElementById("patientTokenCard");
const patientToken = document.getElementById("patientToken");
const displayPatient = document.getElementById("displayPatient");
const displayDoctor = document.getElementById("displayDoctor");
const displaySlot = document.getElementById("displaySlot");
    
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const patientName = document.getElementById("patientName").value.trim();
    const doctor = document.getElementById("doctor").value;
    const slot = document.getElementById("slot").value;

    if (!patientName || !doctor || !slot) {
        showError(
            "Please fill in all the required fields."
        );
        return;
    }

    const bookingKey = patientName.toLowerCase() + "|" + doctor + "|" + slot
    if (bookings.has(bookingKey)) {
        showError(
            "Duplicate booking detected. " +
            "This patient already has a token " +
            "for the selected doctor and slot."
        );
        return;
    }

    const tokenKey = doctor + "|" + slot;
    if (!tokenData[tokenKey]) {
        tokenData[tokenKey] = 1;
    } else {
        tokenData[tokenKey]++;
    }
    const tokenNumber = tokenData[tokenKey];
    bookings.add(bookingKey);
    patientToken.textContent = "T-" + String(tokenNumber).padStart(3, "0");

    displayPatient.textContent = patientName;
    displayDoctor.textContent = doctor;
    displaySlot.textContent = slot;
    patientTokenCard.classList.remove("d-none");

    const current = Math.max(1, tokenNumber - 1);
    currentToken.textContent = "T-" + String(current).padStart(3, "0");

    errorMessage.classList.add("d-none");
    errorMessage.textContent = "";
});

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("d-none");
}
