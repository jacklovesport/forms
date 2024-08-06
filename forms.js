const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

function checkPasswordMatch() {
    if (password.value === confirmPassword.value) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

password.addEventListener('input', checkPasswordMatch);
confirmPassword.addEventListener('input', checkPasswordMatch);
