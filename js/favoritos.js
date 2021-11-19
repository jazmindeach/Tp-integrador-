let peliculas = [];

let peliculasEnStorage = localStorage.setItem('peliculas');

if(peliculasEnStorage != null) {
    peliculas = JSON.parse(peliculasEnStorage); 
}

let cajaPadreFavoritos = document.querySelector('.cajaPadreFavoritos');

let articulos = '';

for(let i= 0; i < peliculas.length; i++) {
   
    let pelicula = peliculas [i];

    
    articulos += `
    <article class="listadoPeliculas">
    <a href="../Tp-integrador-/detail-movie.html?id=${pelicula.id}"><img src="https://image.tmdb.org/t/p/w342${pelicula.backdrop_path}" alt="${pelicula.original_title}"></a>
    <h3><a href="../Tp-integrador-/detail-movie.html"> ${pelicula.original_title}</a></h3>
</article>`

}


