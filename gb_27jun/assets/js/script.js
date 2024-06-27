$.ajax({
    url: '../../ingles.html',
    type: 'get',
    succes: function(respuesta){
        let contenidoTraducido = document.getElementById('contenidoTraduccion')
        contenidoTraducido.innerHTML = respuesta
    },
    error: function(){
        console.log('no carga el archivo')
    }
})