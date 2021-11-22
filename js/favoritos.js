let peliculas = [];

let peliculasEnStorage = localStorage.getItem('peliculas');

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
    <h3><a href="../Tp-integrador-/detail-movie.html?id=${pelicula.id}"> ${pelicula.original_title}</a></h3>
</article>`

}

cajaPadreFavoritos.innerHTML = articulos; 

//lo mismo para series

let series = [];

let seriesEnStorage = localStorage.getItem('series');

if(seriesEnStorage != null) {
    series = JSON.parse(seriesEnStorage); 
}

for(let i= 0; i < series.length; i++) {
   
    let serie = series [i];

    
    articulos += `
    <article class="listadoPeliculas">
    <a href="../Tp-integrador-/detail-series.html?id=${serie.id}"><img src="https://image.tmdb.org/t/p/w342${serie.backdrop_path}" alt="${serie.original_name}"></a>
    <h3><a href="../Tp-integrador-/detail-series.html?id=${serie.id}"> ${serie.original_name}</a></h3>
</article>`

}

cajaPadreFavoritos.innerHTML = articulos; 
