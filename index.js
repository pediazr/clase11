//calcular IMC (indice de masa corporal) de una persona.//
var peso, altura, imc;
console.log("este programa calcula el imc");
peso = prompt("ingresa peso en kilogramos");
altura = prompt("ingresa  altura en metros");
imc = peso / (altura * altura);
console.log("tu imc es: ", imc);

//calcular IVA de un monto de compra//
var monto;
const iva = monto * 0.19;

monto = 23990;
console.log(iva);

//determinar la hipotenusa dada los catetos de un triangulo//
var cateto1, cateto2;
const hipo = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
cateto1 = 3;
cateto2 = 4;
console.log(hipo);
