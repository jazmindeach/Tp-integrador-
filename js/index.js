window.addEventListener("load",function(){    //Controlar que todo el HTML este en el navegador 



    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1") //genera una promesa. Trae la infromacion de la API de peliculas con fetch
        .then(function(respuesta){ //espero que me traiga la infromación para hacer lo que wuiero
            return respuesta.json()   //Convierte los datos a formato JSON
        })
        .then(function(datos){ //
            console.log(datos); //imprimo los datos 
            console.log(datos.results[0]);   // Obtenemos los datos que necesitamos imprimo los resutados
    
            //Capturamos el elemento del DOM que queremos modificar
            let peliculasPopulares = document.getElementById ("1") // Para que se visualice 
           
            for(let i = 0; i <datos.results.length; i++){
                peliculasPopulares.innerHTML += `<article class="cajahija"><a href="detail-movie.html?id=${datos.results[i].id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}"></a>
                <div> 
                <h3 class="titulos"> <a href="detail-movie.html?id=${datos.results[i].id}"> ${datos.results[i].title} </a> </h3>
                
                </div>
                </article>`
            }
    
        })
        .catch(function(error){
            console.log(error);
        })
    
    
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1") //Buscamos infromación de la API
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(datos){
            console.log(datos);
            console.log(datos.results[0]);
            let seriesPopulares = document.getElementById("2")
           
    
            for(let i = 0; i <datos.results.length; i++){
                    
                seriesPopulares.innerHTML += `<artcile class="cajahija"><a href="detail-series.html?id=${datos.results[i].id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}"></a>
                <div> 
                <h3 class="titulos"> <a href="detail-movie.html"> ${datos.results[i].name} </a> </h3>
                
                </div>
                </article>`
            }
            })


       
        .catch(function(error){
            console.log(error);
        })
    
    
        
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1") //Buscamos infromación de la API
        .then(function(respuesta){
            
            return respuesta.json() //Convierte los datos a fromato json
        })
        .then(function(datos){
            
            console.log(datos);
            console.log(datos.results[0]); //Obtenemos los datos que necesitamos 
    
            //Capturamos el elemento del DOM que queremos modificar
            let peliculasBuenas = document.getElementById("3")

            for(let i = 0; i <datos.results.length; i++){
                peliculasBuenas.innerHTML += `<artcile class="cajahija"><a href="detail-movie.html?id=${datos.results[i].id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}"></a>
                <div> 
                <h3 class="titulos"> <a href="detail-movie.html"> ${datos.results[i].title} </a> </h3>
           
                </div>
                </article>`
            }
    
        })
        .catch(function(error){
            console.log(error);
        })
    
    })

    