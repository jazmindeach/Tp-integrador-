window.addEventListener("load",function(){   

    let detallepelicula = location.search // capturo media quary
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula)
    let id = detallePeliculaObjeto.get("id")
    let name = detallePeliculaObjeto.get("name")
    let categoria = detallePeliculaObjeto.get("categoria")
    let titulogenero= document.querySelector(".titulogenero")
    let cajagenero= document.querySelector(".cajaGenero")
    
if (categoria == "pelicula") {
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&sort_by=popularity.desc&with_genres=${id}`)
    .then(function(respuesta){
        return respuesta.json()   
    })
    .then(function(datos){
        console.log(datos);
       titulogenero.innerHTML= `Usted buscó películas del género ${name}`
        datos.results.forEach(data => {
            cajagenero.innerHTML += `<artcile class="cajahija"><a href="detail-movie.html?id=${data.id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"></a>
            <div> 
            <h3 class="titulos"> <a href="detail-movie.html?id=${data.id}"> ${data.title} </a> </h3>
            
            </div>
            </article>`
        })
    

    

    })
    .catch(function(error){
        console.log(error);
    })

} else {     
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US&sort_by=popularity.desc&with_genres=${id}`)
.then(function(respuesta){
    return respuesta.json()   
})
.then(function(datos){
    console.log(datos);
   titulogenero.innerHTML= `Usted buscó series del género ${name}`
    datos.results.forEach(data => {
        cajagenero.innerHTML += `<artcile class="cajahija"><a href="detail-series.html?id=${data.id}"> <img class="" src="https://image.tmdb.org/t/p/w500/${data.poster_path}"></a>
        <div> 
        <h3 class="titulos"> <a href="detail-series.html?id=${data.id}"> ${data.name} </a> </h3>
        
        </div>
        </article>`
    })




})
.catch(function(error){
    console.log(error);
})
    
}


})