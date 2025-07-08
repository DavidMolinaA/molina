document.addEventListener('DOMContentLoaded', function() {
    // Mostrar formulario de registro
    document.getElementById('show-register').addEventListener('click', function() {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('register-container').classList.remove('hidden');
    });
    
    // Mostrar formulario de inicio de sesión
    document.getElementById('show-login').addEventListener('click', function() {
        document.getElementById('register-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
    });
    
    // Manejo de envío del formulario de inicio de sesión
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const emailOrPhone = document.getElementById('login-email').value;
        
        // Validación básica
        if (!emailOrPhone) {
            alert('Por favor ingresa tu email o teléfono');
            return;
        }
        
        // Aquí iría la lógica real de autenticación
        console.log('Intentando iniciar sesión con:', emailOrPhone);
        alert('Inicio de sesión enviado (simulado)');
    });
    
    // Manejo de envío del formulario de registro
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const fullName = document.getElementById('full-name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        // Validaciones básicas
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        if (!fullName || !username || !password || !email) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }
        
        // Aquí iría la lógica real de registro
        console.log('Datos de registro:', {
            fullName,
            username,
            password,
            email,
            phone
        });
        
        alert('Registro exitoso (simulado)');
        
        // Volver al formulario de inicio de sesión después del registro
        document.getElementById('register-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
        
        // Limpiar el formulario
        document.getElementById('register-form').reset();
    });
});