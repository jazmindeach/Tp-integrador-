window.addEventListener("load",function(){    //Controlar que todo el HTML este en el navegador 

    
    let detallepelicula = location.search //tods la url
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula) 
    let id = detallePeliculaObjeto.get("id")
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()   //Convierte los datos a formato JSON
    })
    .then(function(datos){
        console.log(datos);
        
        //Le doy a generos el valor del array de generos 
        var genre = datos.genres
        var generos = "";
        for (var i = 0; i < genre.length; i++) {
            generos += `<a href="detail-genres.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&categoria=pelicula">${datos.genres[i].name} </a> `
        }
        
        //Capturamos el elemento del DOM que queremos modificar
       let peliculasPopulares = document.querySelector (".cajadetailmovie")
       
          peliculasPopulares.innerHTML += ` <article class="movies"> 
                  <img  class="imagenrocky" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">
          </article>
 

  
          <article class="movies"> 
                  <h2> ${datos.title} </h2>
                  <strong>  ${datos.overview}</strong>
                  <p> Pertenece al género de ${generos} </p>
                  <p> Duración: ${datos.runtime}</p>
                  <p> Fecha de estreno: ${datos.release_date} </p>
                  <p> Calificación: ${datos.vote_average} </p> 
                  <a>
                    <h4 class="ocultarElemento mouse" id="agregar"> Agregar a mis favoritos <i class="fas fa-heart"></i></h4>
                    <h4 class="ocultarElemento mouse" id="eliminar"> Eliminar de mis favoritos <i class="fas fa-heart"></i></h4>
                    </a>
          </article>`
       
            // boton de favoritos
            let peliculas = [];

            let peliculasEnStorage = localStorage.getItem('peliculas');

            if(peliculasEnStorage != null){
                peliculas = JSON.parse(peliculasEnStorage);
            }

            //preguntamos si la pelicula existe en el array
           
            let encontrado = false;
            let indice; 

            for( let i = 0; i < peliculas.length; i++) {
                if(id == peliculas[i].id){
                    encontrado = true;
                    indice = i; 
                }
            }

            //hago aparecer los botones segun si encuentra la pelicula o no 

            if(encontrado) { 
                let eliminar = document.querySelector("#eliminar");

                eliminar.style.display = 'block';

                eliminar.addEventListener('click', function(){

                 peliculas.splice(indice, i);

                 localStorage.setItem('peliculas', JSON.stringify(peliculas))

                 location.reload();
                })
            }
            
            else {
                let agregar = document.querySelector("#agregar");

                agregar.style.display = 'block';

                agregar.addEventListener('click', function(){

                    peliculas.push(datos);

                    localStorage.setItem('peliculas',JSON.stringify(peliculas))
                
                    location.reload(); 
                })
            }


            //ahora tengo que capturar el click dentro de los corchetes else





    })
    .catch(function(error){
        console.log(error);
    })



})


