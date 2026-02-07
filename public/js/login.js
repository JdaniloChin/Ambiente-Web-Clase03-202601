document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginError = document.getElementById('login-error');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const email = document.getElementById('correo').value;
        const password =  document.getElementById('pass').value;

        if(email == 'test@example.com' && password == 'admin123'){
            window.location.href='formBT.html';
        }else{
            loginError.innerHTML = `<p>Error al iniciar sesión</p><p><a href='#'>Registrarse Aquí</p>`;
            loginError.style.display = 'block';
        }
    });

});