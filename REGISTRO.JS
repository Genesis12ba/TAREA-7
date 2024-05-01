// Archivo: script.js

// Validación de formulario antes de enviarlo
document.querySelector('form').addEventListener('submit', function (event) {
    var isValid = true;

    // Verificar que todos los campos requeridos estén llenos
    var requiredFields = document.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(function (field) {
        if (field.value.trim() === '') {
            isValid = false;
            alert('Por favor complete todos los campos requeridos.');
            field.focus();
            return false; // Detener el bucle si se encuentra un campo vacío
        }
    });

    // Validar el formato del correo electrónico
    var emailField = document.querySelector('#email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos electrónicos
    if (!emailPattern.test(emailField.value)) {
        isValid = false;
        alert('Por favor ingrese un correo electrónico válido.');
        emailField.focus();
    }

    // Validación de contraseña (mínimo 8 caracteres)
    var passwordField = document.querySelector('#password');
    if (passwordField.value.length < 8) {
        isValid = false;
        alert('La contraseña debe tener al menos 8 caracteres.');
        passwordField.focus();
    }

    // Cancelar el envío del formulario si no es válido
    if (!isValid) {
        event.preventDefault(); // Detener el envío del formulario
    }
});
