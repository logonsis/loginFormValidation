
        function validate() {
            var username = document.getElementById("username");
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            var passwordc = document.getElementById("passwordc");
            var phone = document.getElementById("phone");

            var usernameError = document.getElementById("usernameError");
            var emailError = document.getElementById("emailError");
            var passwordError = document.getElementById("passwordError");
            var passwordcError = document.getElementById("passwordcError");
            var phoneError = document.getElementById("phoneError");

            var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            var phoneRegex = /^\d{10}$/;
            var isValid = true;

            if (username.value === "" || username.value.length <= 5) {
                usernameError.textContent = "UserName";
                username.focus();
                isValid = false;

            } else {
                usernameError.textContent = "";
            }

            if (email.value === "") {
                emailError.textContent = "E-mail is must";
                email.focus();
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            if (password.value === "") {
                passwordError.textContent = "Enter The Pass";
                password.focus();
                isValid = false;
            } else if (!passwordRegex.test(password.value)) {
                passwordError.textContent = "1 number 1 Uppercase 1 Special Charect";
                password.focus();
                isValid = false;
            } else {
                passwordError.textContent = "";
            }

            if (passwordc.value === "") {
                passwordcError.textContent = "Confirm password";
                passwordc.focus();
                isValid = false;
            } else if (passwordc.value !== password.value) {
                passwordcError.textContent = "Passwords Not Matching";
                passwordc.focus();
                isValid = false;
            } else {
                passwordcError.textContent = "";
            }

            if (phone.value == "" || !phoneRegex.test(phone.value)) {
                phoneError.textContent = "Phone# 10-digit number";
                phone.focus();
                isValid = false;
            } else {
                phoneError.textContent = "";
            }

            return isValid;
        }
    