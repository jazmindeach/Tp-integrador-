window.addEventListener("load",function(){

    let generospelicula = document.getElementById("1")
    let generoserie = document.getElementById("2")

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()   //Convierte los datos a formato JSON
    })
    .then(function(datos){
        console.log(datos);
        datos.genres.forEach(data => { 
            generospelicula.innerHTML+= `<li><a href="./detail-genres.html?id=${data.id}&name=${data.name}&categoria=pelicula"> ${data.name} </a> </li>`
            
        });
    

    

    })
    .catch(function(error){
        console.log(error);
    })

    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=0d278db4bda20f994d6bf90837dc480e&language=en-US`)
    .then(function(respuesta){
        return respuesta.json()   //Convierte los datos a formato JSON
    })
    .then(function(datos){
        console.log(datos);
        datos.genres.forEach(data => { 
            generoserie.innerHTML+= `<li><a href="./detail-genres.html?id=${data.id}&name=${data.name}&categoria=serie"> ${data.name} </a> </li>`
            
        });
    

    

    })
    .catch(function(error){
        console.log(error);
    })

})