window.addEventListener("load",function(){    //Controlar que todo el HTML este en el navegador 

    let detallepelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula)
    let id = detallePeliculaObjeto.get("id")
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()   //Convierte los datos a formato JSON
    })
    .then(function(datos){
        console.log(datos);
        
        //Le doy 
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
                  <a href="#"><h4> Agregar a mis favoritos <i class="fas fa-heart"></i></h4></a>
          </article>`
       

    })
    .catch(function(error){
        console.log(error);
    })



})


