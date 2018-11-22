
$(document).ready(function(){
  $("#FORM2").on('submit',function(event){
  var text=$("#mytext").val()
  event.preventDefault();
  $("#board").append(
        '<div class="twitter">'+
        '<div class="elimiar">  </div>'+
        '<p>'+text+'</p>'+
        '</div>'
        )
        $("#mytext").val('');
        $("#mytext").focus();
    });

    
$("#FORM1").on('submit',function(event){
        var text=$("#mytext").val()
          event.preventDefault();
          $("#board").append(
            '<div class="row  contenedor2">'+
              '<div class="col-xs-1"> <img src="img/FotoperfilFinal.jpg" alt="foto perfil" class="img-circle"></div>'+
              '<div class="col-xs-10">'+
              '<div class="col-xs-12"><h5> SEBASTIAN MUÑOZ </h5></div>'+
              '<div class="col-xs-12"><p>'+text+'</p></div>'+
              '<div class="col-xs-12"><img class="img-responsive" src="img/Fotopaisaje.jpg" alt="foto perfil" ></div>'+
              '<div class="col-xs-12"><p><i class="far fa-heart"></i> 0</p></div></div>'+
              '<div class="col-xs-1 elimiar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></div></div>'
              )
              $("#mytext").val('');
              $("#mytext").focus();
          });

$('#board').on('click','.elimiar', function(event){
        //Accion poara eliminar
        event.stopPropagation();
        //Tiempo en el que se elimina el twitter
        $(this).parent().fadeOut(100);
});

$('#board').on('click','.twitter', function(){
$(this).toggleClass('strike');
});

$('#board').on('click','p', function(){
        $(this).children("i").toggleClass('likeable');
        var numero= $(this).text()
        numero=parseFloat(numero)+1
        $(this).html('<p><i class="far fa-heart likeable"></i> '+numero+'</p>')
});
})
