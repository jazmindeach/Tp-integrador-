window.addEventListener("load",function(){



fetch("https://api.themoviedb.org/3/movie/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos);
        console.log(datos.results[0]);
        let peliculasPopulares = document.getElementById ("1")
        datos.results.forEach(data => {
            peliculasPopulares.innerHTML += `<artcile class="cajahija"><a href="detail-movie.html?id=${data.id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"></a>
            <div> 
            <h3 class="titulos"> <a href="detail-movie.html"> ${data.title} </a> </h3>
            
            </div>
            </article>`
        })

    })
    .catch(function(error){
        console.log(error);
    })

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos);
        console.log(datos.results[0]);
        let seriesPopulares = document.getElementById("2")
        datos.results.forEach(data => {
            seriesPopulares.innerHTML += `<artcile class="cajahija"><a href="detail-movie.html?id=${data.id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"></a>
            <div> 
            <h3 class="titulos"> <a href="detail-movie.html"> ${data.name} </a> </h3>
            
            </div>
            </article>`
        })

    })
    .catch(function(error){
        console.log(error);
    })

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&page=1")
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(datos){
        console.log(datos);
        console.log(datos.results[0]);
        let peliculasBuenas = document.getElementById("3")
        datos.results.forEach(data => {
            peliculasBuenas.innerHTML += `<artcile class="cajahija"><a href="detail-movie.html?id=${data.id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"></a>
            <div> 
            <h3 class="titulos"> <a href="detail-movie.html"> ${data.title} </a> </h3>
       
            </div>
            </article>`
        })

    })
    .catch(function(error){
        console.log(error);
    })
})

