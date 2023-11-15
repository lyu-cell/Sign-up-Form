const password = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#password_confirmation");
const button = document.querySelector(".subButton");

button.addEventListener("click", () => {
    if (password.value === confirmPassword.value) return button.setAttribute("type", "submit");
    else if (password.value !== confirmPassword.value) return button.setAttribute("type", "button"), 
            confirmPassword.setAttribute("style", "border: 1px solid red"), 
            password.setAttribute("style", "border: 1px solid red");
}) 