const urlParams = new URLSearchParams(window.location.search);
const buscador = urlParams.get('Buscador');


let busquedaPeliculas = document.querySelector('#busquedaPeliculas');

let busquedaSeries = document.querySelector('#busquedaSeries');

busquedaPeliculas.innerText = buscador;

busquedaSeries.innerText = buscador;
