const signup = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered){
        // return alert("El Correo Electrónico ya esta registrado")
        const aviso = document.querySelector("section");
        aviso.innerHTML ="<h2 id='aviso'>El correo ya está registrado, intentalo de nuevo haciendo <a href='signup.html'>click aqui</a></h2>";
    }

    Users.push({name: name, email: email, password: password});
    localStorage.setItem('users', JSON.stringify(Users));
    const aviso = document.querySelector("section");
        aviso.innerHTML ="<h2 id='aviso'>Registrado correctamente para iniciar sesion has <a href='login.html'>click aqui</a></h2>";

})