const menu = document.getElementById('menu')

const altura = menu.offsetTop + 50

window.addEventListener('scroll', () =>{

    if(window.pageYOffset > altura){
        menu.classList.add('fixed')
    }else{
        menu.classList.remove('fixed')
    }
})

