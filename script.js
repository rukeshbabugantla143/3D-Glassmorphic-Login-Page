 function togglePassword() {
      const password = document.getElementById("password");
      const icon = password.nextElementSibling;
      if (password.type === "password") {
        password.type = "text";
        icon.textContent = "visibility_off";
      } else {
        password.type = "password";
        icon.textContent = "visibility";
      }
    }