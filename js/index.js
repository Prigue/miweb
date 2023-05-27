window.addEventListener("scroll", function(){
      let header = document.querySelector("header");
      header.classList.toggle("abajo", window.scrollY>0);
      
      let footer = document.querySelector("footer");
      if(footer.scrollHeight === footer.clientHeight){
        footer.classList.toggle("aparecer", window.scrollY);
      }
})
// SI QUISIERA QUE NO PUEDA ENTRAR EN UNA PAGINA SIN INICIAR SESION
// const user = JSON.parse(localStorage.getItem('loginSuccess')) || false;
// if (!user){
//   window.location.href = algo
// }

let user = JSON.parse(localStorage.getItem('sesion_iniciada')) || false;

if(user){
  const cambiar = document.querySelector('#sesion');
  cambiar.innerHTML ="<a id='cerrar' href='index.html'>Cerrar Sesion</a>";
}

const button = document.querySelector('#sesion');
button.addEventListener("click", function(){
  localStorage.removeItem('sesion_iniciada');
  let cerrar = document.querySelector('#sesion');
  const cambiar = document.querySelector('#sesion');
  cambiar.innerHTML ="<a id='sesion' href= 'login.html'>Iniciar Sesion</a>";
})

