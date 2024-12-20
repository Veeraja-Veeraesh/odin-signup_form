document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("odin-form");
    const submitButton = form.querySelector("button[type='submit']");
    const inputs = form.querySelectorAll("input");
    const password = document.getElementById("user_password");
    const confirmPassword = document.getElementById("user_confirm_password");
  
    const validateForm = () => {
      let isFormValid = true;
  
      inputs.forEach((input) => {
        // Clear any existing custom validity message
        input.setCustomValidity("");
  
        // Check for custom validations
        if (input.id === "user_confirm_password" && input.value !== password.value) {
          input.setCustomValidity("Passwords do not match.");
        }
  
        // Check field validity
        if (!input.checkValidity()) {
          isFormValid = false;
        }
      });
  
      // Toggle submit button
      submitButton.disabled = !isFormValid;
    };
  
    // Add event listeners to validate inputs on input or blur
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        validateForm();
      });
  
      input.addEventListener("blur", () => {
        input.reportValidity(); // Triggers the display of the custom error message
      });
    });
  
    validateForm(); // Initial validation
  });
  