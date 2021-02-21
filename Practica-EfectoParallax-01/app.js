const parallax = document.querySelector(".parallax")
const titulo = document.querySelector(".titulo")


function ScrollParallax(){

   const scrollTop = document.documentElement.scrollTop
   parallax.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)'
   titulo.style.transform = 'translateX(' + scrollTop * -1.5 + 'px)'
   
}

window.addEventListener('scroll', ScrollParallax)