
function ocultar_resultado(){

    var divs = document.getElementsByClassName("div_resultado");

    for (var i = 0; i < divs.length; i++){
    document.getElementsByClassName("div_resultado")[i].style.display = "none"
    }
}

//CALCULADORA
/*
var num1 = prompt("ingrese el primer número");
var num2 = prompt("ingrese el segundo número");
function suma(a,b){
    var resultado =parseInt(a)+parseInt(b);
    return resultado;
}
var resultado = suma(num1, num2);
alert("el resultado de la suma es:"+ resultado);

function resta(a,b){
    resultado =parseInt(a)-parseInt(b);
    return resultado;
}
resultado = resta(num1, num2);
alert("el resultado de la resta es:"+ resultado);


function multiplicacion(a,b){
    resultado =parseInt(a)*parseInt(b);
    return resultado;
}
resultado = multiplicacion(num1, num2);   
alert("el resultado de la multiplicacion es:"+ resultado);


function division(a,b){
    if(b!=0){
        resultado =parseInt(a)/parseInt(b);
        return resultado;
    }else{
        alert("no se puede dividir por 0");
        return resultado;
    }
}
resultado = division(num1, num2);    
alert("el resultado de la division es:"+ resultado);
var btn_calc = document.getElementById("btn_calculadora");

btn_calc.addEventListener("click", function(){
ocultar_resultado();
document.getElementById("div_calculadora").style.display = "block";
});
*/

//CARACTERES
function caracteres(){
var texto = document.getElementById("inputCaracteres").value;
var caracteres = texto.length; 

document.getElementById("resultadoCaracteres").innerText=caracteres;
}
//Mayusculas & minusculas
function mayuscula(){
var texto = document.getElementByIdprompt("inputTexto");
var texto1 = texto.toUpperCase
var texto2 = texto.toLowerCase
}
//sumatoria
function sumatoria(){
    var num1 = document.getElementById("inputSumatoria").value;
    var res=0;
    for (var i = 1; i <= num1; i++){
        res = res + i;
    }
    document.getElementById("resultadoSumatoria").innerText=res;
}