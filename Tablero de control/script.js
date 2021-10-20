/*function ocultar_resultado(){

    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++){
        document.getElementsByClassName("div_resultado")[i].style.display = "none";
    }
}

//CALCULADORA
var btn_calc = document.getElementById("btn_calculadora");

btn_calc.addEventListener("click", function(){
    ocultar_resultado();
    document.getElementById("div_calculadora").style.display = "block";
});

//CARACTERES
var btn_contar = document.getElementById("btn_contar");

btn_carac.addEventListener("click", function(){
    ocultar_resultado();
    document.getElementById("div_caracteres").style.display = "block";
});

//Mayusculas & minusculas
var btn_may = document.getElementById("btn_may");
btn_carac.addEventListener("click", function(){
    ocultar_resultado();
    document.getElementById("div_mayusculas").style.display = "block";
});

//sumatoria
var botonSumatoria = document.getElementById("botonSumatoria");
btn_sum.addEventListener("click", function(){
    ocultar_resultado();
    document.getElementById("div_calculadora").style.display = "block";
        });
*/
//CONTAR CARACTERES
var btn_contar = document.getElementById("btn_contar");
btn_contar.addEventListener("click", function () {
    var a = document.getElementById("imputSumatoria").value;
    var b = a.length;
    document.getElementById("resultado_caracteres").innerText = "la cantidad de caracteres = " + b;
})

//MAYUSCULA & MINUSCULA
var btn_may = document.getElementById("btn_may");
btn_may.addEventListener("click", function() {
    var c = document.getElementById("imputConv").innerText;
    var d = c.toUpperCase;
    var e = c.toLowerCase;
    document.getElementById("resultado_may").innerText = "el texto convertido es : " + d + " " + e;
    })