(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

form.addEventListener("submit", (event) => {
    // if the email field is valid, we let the form submit
    if (!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = "error active";
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw2REFBNkQsaUJBQWlCLFlBQVksY0FBYyxtQkFBbUI7QUFDM0g7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbmNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsICsgc3Bhbi5lcnJvclwiKTtcblxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIC8vIEVhY2ggdGltZSB0aGUgdXNlciB0eXBlcyBzb21ldGhpbmcsIHdlIGNoZWNrIGlmIHRoZVxuICAgIC8vIGZvcm0gZmllbGRzIGFyZSB2YWxpZC5cblxuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAvLyBJbiBjYXNlIHRoZXJlIGlzIGFuIGVycm9yIG1lc3NhZ2UgdmlzaWJsZSwgaWYgdGhlIGZpZWxkXG4gICAgICAgIC8vIGlzIHZhbGlkLCB3ZSByZW1vdmUgdGhlIGVycm9yIG1lc3NhZ2UuXG4gICAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyAvLyBSZXNldCB0aGUgY29udGVudCBvZiB0aGUgbWVzc2FnZVxuICAgICAgICBlbWFpbEVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3JcIjsgLy8gUmVzZXQgdGhlIHZpc3VhbCBzdGF0ZSBvZiB0aGUgbWVzc2FnZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIHN0aWxsIGFuIGVycm9yLCBzaG93IHRoZSBjb3JyZWN0IGVycm9yXG4gICAgICAgIHNob3dFcnJvcigpO1xuICAgIH1cbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gaWYgdGhlIGVtYWlsIGZpZWxkIGlzIHZhbGlkLCB3ZSBsZXQgdGhlIGZvcm0gc3VibWl0XG4gICAgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxheSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXG4gICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgICAvLyBUaGVuIHdlIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzZW50IGJ5IGNhbmNlbGluZyB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKCkge1xuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgICAgICAvLyBkaXNwbGF5IHRoZSBmb2xsb3dpbmcgZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIjtcbiAgICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MsXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJFbnRlcmVkIHZhbHVlIG5lZWRzIHRvIGJlIGFuIGVtYWlsIGFkZHJlc3MuXCI7XG4gICAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgICAvLyBJZiB0aGUgZGF0YSBpcyB0b28gc2hvcnQsXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gYEVtYWlsIHNob3VsZCBiZSBhdCBsZWFzdCAke2VtYWlsLm1pbkxlbmd0aH0gY2hhcmFjdGVyczsgeW91IGVudGVyZWQgJHtlbWFpbC52YWx1ZS5sZW5ndGh9LmA7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBzdHlsaW5nIGFwcHJvcHJpYXRlbHlcbiAgICBlbWFpbEVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3IgYWN0aXZlXCI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9