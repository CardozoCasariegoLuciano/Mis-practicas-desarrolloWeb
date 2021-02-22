const animado = document.querySelectorAll(".animado")

function mostrarCajas () {

    let topHeigth = document.documentElement.scrollTop    

    for(let i = 0 ; i < animado.length; i++){

        let alturaAnimado = animado[i].offsetTop

        if(alturaAnimado - 700 < topHeigth){
            animado[i].style.opacity = 1            
            animado[i].classList.add("mostrarArriba")
        }

        if(alturaAnimado > topHeigth + 700){
            animado[i].style.opacity = 0   
            animado[i].classList.remove("mostrarArriba")        
        }
    }
}

window.addEventListener("scroll", mostrarCajas)