// API DE MAPA

let map = L.map('map').setView([-34.859102, -56.20702], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([-34.859102, -56.20702], {
    color: 'transparent',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 600
}).addTo(map);
circle.bindPopup("Aquí es donde realizo los entrenamientos al aire libre!");

// FIN API DE MAPA


window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
    
    let footer = document.querySelector("footer");
    if(footer.scrollHeight === footer.clientHeight){
      footer.classList.toggle("aparecer", window.scrollY);
    }
})

