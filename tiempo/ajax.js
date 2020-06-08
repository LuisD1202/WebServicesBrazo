$("#enviar").click(function(){

fecha =$("#fecha").val();
direccion =$("#direccion").val();

        $.ajax({

            url:"llega.php",
            type: "POST",
            data: {
                direccion: direccion,
                fecha: fecha,
            },
            success: function(respuesta){

            }

    });

});