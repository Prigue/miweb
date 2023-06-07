const login = document.querySelector("#loginForm");
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Contraseña o Correo incorrectos',
            text: 'Lo siento...'
          })
    }
    if(validUser){
         window.location.href = 'index.html';
    }

    localStorage.setItem('sesion_iniciada', JSON.stringify(validUser));
})