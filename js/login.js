const login = document.querySelector("#loginForm");
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if (!validUser){
        const aviso = document.querySelector("section");
        aviso.innerHTML ="<h2 id='aviso'>Correo o contraseña incorrectos, intentalo de nuevo haciendo <a href='login.html'>click aqui</a></h2>";
    }
    if(validUser){
         window.location.href = 'index.html';
    }

    localStorage.setItem('sesion_iniciada', JSON.stringify(validUser));
})