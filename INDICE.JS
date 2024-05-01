// Archivo: script.js

// Alternar entre formularios de inicio de sesión y registro
document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('.sign-up-btn');
    const signInButton = document.querySelector('.sign-in-btn');
    const signUpForm = document.querySelector('.container-form.sign-up');
    const signInForm = document.querySelector('.container-form.sign-in');

    signUpButton.addEventListener('click', function () {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });

    signInButton.addEventListener('click', function () {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    });
});

// Validación básica de campos de inicio de sesión
document.querySelector('.container-form.sign-in .formulario').addEventListener('submit', function (event) {
    const email = document.querySelector('.container-form.sign-in input[type="email"]').value.trim();
    const password = document.querySelector('.container-form.sign-in input[type="password"]').value.trim();

    if (!email || !password) {
        event.preventDefault();
        alert('Por favor, ingrese su usuario y contraseña.');
    }
});

// Validación básica de campos de registro
document.querySelector('.container-form.sign-up .formulario').addEventListener('submit', function (event) {
    const requiredFields = document.querySelectorAll('.container-form.sign-up .formulario input[required]');

    let isValid = true;
    requiredFields.forEach(function (field) {
        if (field.value.trim() === '') {
            isValid = false;
            alert('Por favor, complete todos los campos requeridos.');
            field.focus();
            return false; // Detener el bucle si se encuentra un campo vacío
        }
    });

    if (!isValid) {
        event.preventDefault(); // Detener el envío del formulario
    }
});

// Archivo: script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de "Iniciar sesión" en el formulario de inicio de sesión
    const signInButton = document.querySelector('.container-form.sign-in input[type="button"]');

    // Añade un evento de clic al botón
    signInButton.addEventListener('click', function() {
        // Muestra un mensaje de confirmación
        alert('Intentando iniciar sesión...');
        
        // Aquí es donde podrías realizar acciones adicionales, como validar campos o enviar datos al servidor.
        const emailField = document.querySelector('.container-form.sign-in input[type="email"]');
        const passwordField = document.querySelector('.container-form.sign-in input[type="password"]');

        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        // Comprobar que los campos no estén vacíos
        if (!email || !password) {
            alert('Por favor, complete el campo de usuario y contraseña.');
            return;
        }

        // Aquí podrías agregar lógica para validar o enviar el formulario
        console.log('Usuario:', email);
        console.log('Contraseña:', password);
        
        // Para enviar el formulario, puedes hacer esto:
        // document.querySelector('.container-form.sign-in .formulario').submit();
    });
});
