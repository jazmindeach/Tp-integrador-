window.addEventListener("load",function(){    //Controlar que todo el HTML este en el navegador 

    let detallepelicula = location.search
    let detallePeliculaObjeto = new URLSearchParams(detallepelicula)
    let id = detallePeliculaObjeto.get("id")
    let name = detallePeliculaObjeto.get("name")
    let categoria = detallePeliculaObjeto.get("categoria")
    


})