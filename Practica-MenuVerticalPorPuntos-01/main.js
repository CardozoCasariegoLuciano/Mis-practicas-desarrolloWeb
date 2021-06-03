
const elementos = document.querySelectorAll("#temario .temario-list a")
elementos.forEach( (elem) => {
    elem.addEventListener("click", () => {
        const old = document.querySelector(".activo")
        old.classList.remove("activo")
        elem.parentElement.classList.add("activo")
    })
})


const btn = document.getElementById("btn")
const temario = document.getElementById("temario")


if(window.innerWidth > 700){
    limpiarOcutamiento()
}

btn.addEventListener("click", () => {
    temario.classList.toggle("ocultar")
})


window.addEventListener("resize", limpiarOcutamiento)



function limpiarOcutamiento (){

    if(window.innerWidth > 700){
        if(temario.classList.contains("ocultar")){
    
            temario.classList.remove("ocultar")
        }    
    }
}