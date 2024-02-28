import "./style.css";

const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip_code");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const resetButton = document.getElementById("reset");

const countryRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const zipCodeRegex = /^\d{5}$/;
const passwordRegex = /^[0-9a-zA-Z`~!@#$%^&*()\-_=+\[\]{}\\|;:'",.<>/?]{8,}$/;

email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
zipCode.addEventListener("input", validateZipCode);
password.addEventListener("input", validatePassword);
confirm_password.addEventListener("input", validateConfirmPassword);
resetButton.addEventListener("click", resetStyle);
resetButton.addEventListener("click", resetErrors);

function validateEmail() {
    const error = email.nextElementSibling;
    if (email.value === "" || !emailRegex.test(email.value)) {
        error.textContent = "Please enter a valid email address.";
        error.style.color = "red";
        email.classList.add("invalid");
        email.classList.remove("valid", "empty");
        return false;
    } else {
        error.textContent = "";
        email.classList.add("valid");
        email.classList.remove("invalid");
        return true;
    }
}

function validateCountry() {
    const error = country.nextElementSibling;
    if (country.value === "" || !countryRegex.test(country.value)) {
        error.textContent = "Please enter a country.";
        error.style.color = "red";
        country.classList.add("invalid");
        country.classList.remove("valid", "empty");
        return false;
    } else {
        error.textContent = "";
        country.classList.add("valid");
        country.classList.remove("invalid");
        return true;
    }
}

function validateZipCode() {
    const error = zipCode.nextElementSibling;
    if (zipCode.value === "" || !zipCodeRegex.test(zipCode.value)) {
        error.textContent = "Please enter a valid zip code.";
        error.style.color = "red";
        zipCode.classList.add("invalid");
        zipCode.classList.remove("valid", "empty");
        return false;
    } else {
        error.textContent = "";
        zipCode.classList.add("valid");
        zipCode.classList.remove("invalid");
        return true;
    }
}

function validatePassword() {
    const error = password.nextElementSibling;
    if (password.value === "" || !passwordRegex.test(password.value)) {
        error.textContent = "Please enter a valid password.";
        error.style.color = "red";
        password.classList.add("invalid");
        password.classList.remove("valid", "empty");
        return false;
    } else {
        error.textContent = "";
        password.classList.add("valid");
        password.classList.remove("invalid");
        return true;
    }
}

function validateConfirmPassword() {
    const error = confirm_password.nextElementSibling;
    if (password.value !== confirm_password.value) {
        error.textContent = "Passwords do not match.";
        error.style.color = "red";
        confirm_password.classList.add("invalid");
        confirm_password.classList.remove("valid", "empty");
        return false;
    } else {
        error.textContent = "Passwords Match";
        error.style.color = "green";
        confirm_password.classList.add("valid");
        confirm_password.classList.remove("invalid");
        return true;
    }
}

function resetInputs() {
    document.querySelectorAll("input").forEach(function (input) {
        input.value = "";
    });
}

function resetErrors() {
    document.querySelectorAll(".error").forEach(function (span) {
        span.textContent = "";
    });
}

function resetStyle() {
    document.querySelectorAll("input").forEach(function (input) {
        input.classList.remove("valid", "invalid");
        input.classList.add("empty");
    });
}

function validateForm(event) {
    event.preventDefault();
    form.classList.add("attempted-submitted");
    let isValid = true;

    // Reset error messages
    resetErrors();

    if (!validateEmail()) isValid = false;
    if (!validateCountry()) isValid = false;
    if (!validateZipCode()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    if (isValid) {
        resetInputs();
        resetErrors();
        alert("Form submitted successfully!");
    } else {
        alert("Form validation failed!");
    }
}

form.addEventListener("submit", validateForm);
