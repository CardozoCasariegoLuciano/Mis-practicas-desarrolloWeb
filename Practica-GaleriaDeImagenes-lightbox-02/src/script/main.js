$('.galeria__img').click(function(e){

    var img = e.target.src;
    var titulo = e.target.dataset.titulo;   

    var modal = '<div class="modal"><h2 class="modal__titulo"> '+ titulo + ' </h2><img src=" '+ img +'  " class="modal__img"><div class="modal__boton">X</div></div>';

    $('body').append(modal);


    $('.modal__boton').click(function(){

        $('.modal').remove();
    }) 


})

$(document).keyup(function(e){

    if(e.which == 27){
        $('.modal').remove();
    }
})

