window.addEventListener("load",function(){    //Controlar que todo el HTML este en el navegador 

    let detallepelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula)
    let id = detallePeliculaObjeto.get("id")
    
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()   //Convierte los datos a formato JSON
    })
    .then(function(datos){
        console.log(datos);
        
       //Le doy a generos el valor del array de generos 
        var genre = datos.genres
        var generos = "";
        for (var i = 0; i < genre.length; i++) {
            generos += `<a href="detail-genres.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&categoria=serie">${datos.genres[i].name} </a> `
        }
        
        //Capturamos el elemento del DOM que queremos modificar
       let peliculasPopulares = document.querySelector (".cajaSeries")
       
          peliculasPopulares.innerHTML += ` <article class="movies"> 
                  <img  class="imagenrocky" src="https://image.tmdb.org/t/p/w500/${datos.poster_path}">
          </article>
 

  
          <article class="movies"> 
                  <h2> ${datos.name} </h2>
                  <strong>  ${datos.overview}</strong>
                  <p> Pertenece al género de ${generos} </p>
                  <p> Capitulos: ${datos.number_of_episodes}</p>
                  <p> Fecha de estreno: ${datos.first_air_date} </p>
                  <p> Calificación: ${datos.vote_average} </p> 
                  <a href="#"><h4> Agregar a mis favoritos <i class="fas fa-heart"></i></h4></a>
          </article>`
       

    })
    .catch(function(error){
        console.log(error);
    })



})