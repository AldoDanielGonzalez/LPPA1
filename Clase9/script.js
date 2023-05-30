document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const passwordInput = document.getElementById('password');
  const inputs = form.querySelectorAll('input');

  function validateField(input) {
    const inputValue = input.value.trim();
    const feedback = input.nextElementSibling;

    switch (input.id) {
      case 'username':
        if (/^[A-Za-z0-9_]{4,16}$/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent =
            'El usuario debe tener entre 4 y 16 caracteres y solo puede contener números, letras y guiones bajos.';
          return false;
        }

      case 'password':
        if (inputValue.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent =
            'La contraseña debe tener al menos 8 caracteres y contener letras y números.';
          return false;
        }

      case 'confirmPassword':
        if (passwordInput.classList.contains('is-valid') && inputValue === passwordInput.value) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'Las contraseñas no coinciden.';
          return false;
        }

      case 'fullName':
        if (inputValue.length >= 6 && /[a-zA-Z]+\s[a-zA-Z]+/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'El nombre completo debe tener al menos 6 caracteres y contener al menos un espacio.';
          return false;
        }

      case 'email':
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'El email debe tener un formato válido.';
          return false;
        }

      case 'age':
        if (Number.isInteger(parseInt(inputValue)) && parseInt(inputValue) >= 18) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'La edad debe ser un número entero mayor o igual a 18.';
          return false;
        }

      case 'phone':
        if (/^\d{7,}$/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'El teléfono debe contener al menos 7 dígitos y solo puede contener caracteres numéricos.';
          return false;
        }

      case 'address':
        if (inputValue.length >= 5 && /[a-zA-Z]+\s\d+/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'La dirección debe tener al menos 5 caracteres, contener letras, al menos 1 espacio y números.';
          return false;
        }

      case 'city':
        if (/\D/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'La ciudad debe contener letras y no puede ser solo numérica.';
          return false;
        }

      case 'postalCode':
        if (inputValue.length >= 3) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'El código postal debe tener al menos 3 caracteres.';
          return false;
        }

      case 'dni':
        if (/^\d{7,8}$/.test(inputValue)) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          feedback.textContent = '';
          return true;
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          feedback.textContent = 'El DNI debe contener 7 u 8 dígitos.';
          return false;
        }

      default:
        return true;
    }
  }

  function validateForm() {
    let validForm = true;

    inputs.forEach(function(input) {
      if (!validateField(input)) {
        validForm = false;
      }
    });

    return validForm;
  }

  inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validateField(input);
    });

    input.addEventListener('focus', function() {
      const feedback = input.nextElementSibling;
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
        feedback.textContent = '';
      }
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let validForm = true;
    let formInfo = 'Datos del formulario:\n\n';
  
    inputs.forEach(function(input) {
      if (!validateField(input)) {
        validForm = false;
      }
  
      const label = document.querySelector(`label[for="${input.id}"]`).textContent;
      formInfo += `${label}: ${input.value}\n`;
    });
  
    if (validForm) {
      alert(formInfo);
      form.reset();
    }
  });
  
});