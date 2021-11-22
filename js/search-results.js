const urlParams = new URLSearchParams(window.location.search);
const buscador = urlParams.get('Buscador');

//peliculas

let busquedaPeliculas = document.querySelector('#busquedaPeliculas');

let busquedaSeries = document.querySelector('#busquedaSeries');

busquedaPeliculas.innerText = `Usted buscó la palabra: ${buscador}`; 

busquedaSeries.innerText = `Usted buscó la palabra: ${buscador}`;

let sectionPeliculas = document.querySelector('#sectionPeliculas');

fetch(`https://api.themoviedb.org/3/search/movie?api_key=819b7c86c8607512f0fdebc52441505d&query=${buscador}&page=1&include_adult=false`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)

        let buscandoPeliculas = document.querySelector('#buscandoPeliculas');

        if(response.results.length == 0){
            buscandoPeliculas.innerText = 'No se encontraron peliculas';
        }
        else{
            let sectionPeliculas = document.querySelector('#sectionPeliculas')
            
            buscandoPeliculas.innerText = 'Resultados de peliculas';

            for(let i = 0; i < response.results.length; i++){

                let pelicula = response.results [i];

                if(pelicula.backdrop_path != null) {

                    sectionPeliculas.innerHTML += `
                <article class="cajahijasearch">  
                    <a href="detail-movie.html?id=${pelicula.id}"> <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${pelicula.backdrop_path}"> </a>
                    <h3 class="titulos"> <a href="detail-movie.html"  target="_blanck"> ${pelicula.original_title} </a> </h3>
                    <h4 class="mostrar"> Fecha de estreno: ${pelicula.release_date} </h4> 
            </article>
            `
                }

                sectionPeliculas.style.display = 'block';
            }
        }

    })

  
  //series
  
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=819b7c86c8607512f0fdebc52441505d&query=${buscador}&page=1&include_adult=false`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)

        let buscandoSeries = document.querySelector('#buscandoSeries');

        if(response.results.length == 0){
            buscandoSeries.innerText = 'No se encontraron series';
        }
        else{
            let sectionSeries = document.querySelector('#sectionSeries')
            
            buscandoSeries.innerText = 'Resultados de series';

            for(let i = 0; i < response.results.length; i++){

                let series = response.results [i];

                if(series.backdrop_path != null) {

                    sectionSeries.innerHTML += `
                    <article class="cajahijasearch">  
                        <a href="detail-series.html?id=${series.id}"> <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${series.backdrop_path}"> </a>
                        <h3 class="titulos"> <a href="detail-series.html"  target="_blanck"> ${series.original_name} </a> </h3>
                        <h4 class="mostrar"> Fecha de estreno: ${series.first_air_date} </h4> 
                    </article>
                    `
                }

                sectionSeries.style.display = 'block'; 
            }
        } 

    })


