let imagenes = [
    {
        "url": "img/1.png",
        
    },
    {
        "url": "img/2.png",
        
    },
    {
        "url": "img/3.png",
        
    },
    {
        "url": "img/4.png",
        
    },
    {
        "url": "img/5.png",
        
    },
    {
        "url": "img/6.png",
        
    },
    {
        "url": "img/7.png",
        
    },
    {
        "url": "img/8.png",
        
    },
    {
        "url": "img/9.png",
        
    },
    {
        "url": "img/10.png",
        
    },
    
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}