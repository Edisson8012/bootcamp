/*
function ocultar_resultado() {

    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++) {
        document.getElementsByClassName("div_resultado")[i].style.display = "none";
    }
}

//CALCULADORA
var btn_calc = document.getElementById("btn_calculadora");

btn_calc.addEventListener("click", function () {
    ocultar_resultado();
    document.getElementById("div_calculadora").style.display = "block";
});

//CARACTERES
var btn_contar = document.getElementById("btn_contar");

btn_contar.addEventListener("click", function () {
    ocultar_resultado();
    document.getElementById("div_caracteres").style.display = "block";
});

//Mayusculas & minusculas
var btn_may = document.getElementById("btn_may");
btn_may.addEventListener("click", function () {
    ocultar_resultado();
    document.getElementById("div_mayusculas").style.display = "block";
});

//Sumatoria
var btn_sum = document.getElementById("btn_sum");
btn_sum.addEventListener("click", function () {
    ocultar_resultado();
    document.getElementById("div_calculadora").style.display = "block";
});
*/
//CONTAR CARACTERES
var btn_contar = document.getElementById("btn_contar");
btn_contar.addEventListener("click", function () {
    var a = document.getElementById("imputcontar").value;
    var b = a.length;
    document.getElementById("resultado_caracteres").innerText = "la cantidad de caracteres = " + b;
})

//MAYUSCULA & MINUSCULA
var btn_may = document.getElementById("btn_may");
btn_may.addEventListener("click", function () {
    var c = document.getElementById("imputConv").innerText;
    var d = c.toUpperCase;
    var e = c.toLowerCase;
    document.getElementById("resultado_may").innerText = "el texto convertido es : " + d + " " + e;
})

//SUMATORIA
function sumarNum() {
    var su = document.getElementById("imputsum").value;
    su = parseInt(su);

    var resultado = 0;
    for (var i = 1; i <= su; i++) {
        resultado += i;
    }
    return resultado;
}
var sumnum = document.getElementById("btn_sum");
sumnum.addEventListener("click", function () {
    var res = sumarNum();
    var cont = document.getElementById("result-sum");
    cont.value = ("Total sumatoria: " + res);
})