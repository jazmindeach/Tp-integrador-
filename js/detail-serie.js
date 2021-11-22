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
                  <a>
                    <h4 class="ocultarElemento" id="agregar"> Agregar a mis favoritos <i class="fas fa-heart"></i></h4>
                    <h4 class="ocultarElemento" id="eliminar"> Eliminar de mis favoritos <i class="fas fa-heart"></i></h4>
                  </a>
          </article>`
       
          // boton de favoritos
          let series = [];

          let seriesEnStorage = localStorage.getItem('series');

          if(seriesEnStorage != null){
              series = JSON.parse(seriesEnStorage);
          }

          //preguntamos si la pelicula existe en el array
         
          let encontrado = false;
          let indice; 

          for( let i = 0; i < series.length; i++) {
              if(id == series[i].id){
                  encontrado = true;
                  indice = i; 
              }
          }

          //hago aparecer los botones segun si encuentra la pelicula o no 

          if(encontrado) { 
              let eliminar = document.querySelector("#eliminar");

              eliminar.style.display = 'block';

              eliminar.addEventListener('click', function(){

               series.splice(indice, 1);

               localStorage.setItem('series', JSON.stringify(series))

               location.reload();
              })
          }
          
          else {
              let agregar = document.querySelector("#agregar");

              agregar.style.display = 'block';

              agregar.addEventListener('click', function(){

                  series.push(datos);

                  localStorage.setItem('series',JSON.stringify(series))
              
                  location.reload(); 
              })
          }


          //ahora tengo que capturar el click dentro de los corchetes else

    })
    .catch(function(error){
        console.log(error);
    })



})