const progresBar = document.querySelector('.progresBar')

const scrollProgresBar = () => {

    let scrollTop  = document.documentElement.scrollTop // es lo que avanza el scroll 
    let scrollHeigth = document.documentElement.scrollHeight // es alto total de toda la ventana
    let clientHeigth = document.documentElement.clientHeight // es lo que se ve en la venta en este momento

    let windowsHeigth = scrollHeigth - clientHeigth   // es lo restante de la ventana (lo que no veo)
    let porsentaje =  (scrollTop / windowsHeigth) * 100

    progresBar.style.width = porsentaje + '%'
}

window.addEventListener('scroll', scrollProgresBar)