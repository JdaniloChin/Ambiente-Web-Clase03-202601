document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const loginError = document.getElementById('login-error');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const email = document.getElementById('correo').value;
        const password =  document.getElementById('pass').value;

        if(email == 'test@example.com' && password == 'admin123'){

            //Mostrar Spinner
            const spinner = document.getElementById('loading-spinner');
            spinner.classList.remove('hidden');
            //Simular la carga en 2 segundos y lyego redirigir a la otra pagina
            setTimeout(() => {
                window.location.href='formBT.html';
            }, 2000);
            
        }else{
            loginError.innerHTML = `<p>Error al iniciar sesión</p><p><a href='#'>Registrarse Aquí</p>`;
            loginError.style.display = 'block';
        }
    });

});

(function (){
    const toggle = document.getElementById('togglePassword');
    const input =  document.getElementById('pass');


    toggle.addEventListener('click', function () {
        //guardar la posiicion cursor
        const start = input.selectionStart;
        const end = input.selectionEnd;

        const mostrar = input.type === 'password';
        input.type = mostrar ? 'text' : 'password';

        //alternar icono (bi-eye <-> bi-eye-slash)
        const icon = this.querySelector('i');
        icon.classList.toggle('bi-eye', !mostrar); //muestra ojo cuando oculto
        icon.classList.toggle('bi-eye-slash', mostrar); //muestra ojo tachado cuando visible

        //actualizar aria-label para accesibilidad
        this.setAttribute('aria-label', mostrar ? 'Ocultar Contraseña' : 'Mostrar Contraseña');
        this.setAttribute('title', this.getAttribute('aria-label')); 

        //restuarar la seleccion y timeout para asegurar que el tipo de input se realice
        setTimeout(() => {
            if(start !== null && end !== null) input.setSelectionRange(start, end);
        },0);
    });

})();