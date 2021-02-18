const inputs = document.getElementsByClassName('form__imput')
const spans =  document.getElementsByClassName('description')

for (let i = 0; i < inputs.length; i++){

    let element =  inputs[i]

    element.addEventListener('keyup', () => {  

        if( element.value.length >= 1){

            element.nextElementSibling.classList.add('seleccionar') 
            
        }else{
            
            element.nextElementSibling.classList.remove('seleccionar') 
        }
    })
}
