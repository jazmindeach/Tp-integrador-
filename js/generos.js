window.addEventListener("load",function(){

    let generospelicula = document.getElementById("titulogenerospel") // poner palabra
    let generoserie = document.getElementById("titulogenerosserie")

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()  
    })
    .then(function(datos){
        console.log(datos);
        for(let i = 0; i < datos.genres.length; i++){

                generospelicula.innerHTML+= `<li><a href="./detail-genres.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&categoria=pelicula"> ${datos.genres[i].name} </a> </li>`
                

            }
    

    })
    .catch(function(error){
        console.log(error);
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json() 
    })
    .then (function (datos){
        console.log(datos);
        for(let i = 0; i < datos.genres.length; i++){
                generoserie.innerHTML+= `<li><a href="./detail-genres.html?id=${datos.genres[i].id}&name=${datos.genres[i].name}&categoria=pelicula"> ${datos.genres[i].name} </a> </li>`


            }
    


    })
    .catch(function(error){
        console.log(error);
    })

})