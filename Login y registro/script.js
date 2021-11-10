$(document).ready(function(){


    function usuarios(){
        var u = prompt[""];
        if(u =="edissoncamargo@htomail.com" && u == "Sonialopez@hotmail.com"){
            return u[u==""];
        }else{ 
            return "[Seleccione una opción válida]";
        }
    }

    function contraseñas(e){
        var contra = prompt[""];
        if(e =="Edisson1280" && e =="Sonia1878"){
            return contra[e==""];
        }else{
            return "[Seleccione una opción válida]";
        }
    }

    $("#btn_login").click(function(){
        op = $("#registro").val();
        var nombre_usuarios = usuarios(op);
        var nombre_contraseñas = contraseñas(op);
    });

    $("#btn_opcion").click(function(){
        op = $("#opcion").val();
        var nombre_usuarios = usuarios(op);
        var nombre_contraseñas = contraseñas(op);
        $("#paso2").show();
        $("#paso1").hide();
    });


    $("#registro").click(function(){
        var contra = contraseñas(op);
    
        $("#paso2").hide();

        $("#saludo").html("¡Bienvenido a tu correo!");

    });


    

});