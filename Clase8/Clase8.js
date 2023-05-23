// Ejercicio 1: Determine el resultado de la siguiente operación:
var firstw, secondw, thirdw;
firstw = "Hello";
secondw = "World";
thirdw = firstw.length + secondw.length;
console.log(thirdw);

// Ejercicio 2: Determine el resultado de la siguiente operación:
var text;
text = "One of the best";
text.toUpperCase();
console.log(text.toUpperCase());

//Ejercicio 3: Determine el resultado de la siguiente operación:
var text2;
text2 = "Number of the beast";
text2.substring(0, 4);
console.log(text2.substring(0, 4));

//Ejercicio 4: Determine el resultado de la siguiente operación:
var text3, result;
text3 = "Back in time";
result = text3.substring(9);
console.log(result);

//Ejercicio 5: Escriba el código en JavaScript que muestre el siguiente texto por pantalla: "¡Hola Mundo!"
console.log("¡Hola Mundo!");
document.write("¡Hola Mundo!");

//Ejercicio 6: Complete el siguiente código en JavaScript para que sume el valor de las siguientes variables e informe el resultado por pantalla.
let a, b;
a = 10; b = 5;
let resultado;
resultado = a + b;
console.log("El Resultado es: " + resultado);

//Ejercicio 7: Complete el siguiente código en JavaScript para que reciba el nombre de una persona y lo salude por pantalla.
let nombre;
nombre = window.prompt("Introduzca su nombre", "0"); 
console.log("Hola " + nombre + "!");

//Ejercicio 8: Complete el siguiente código en JavaScript para que reciba un número, lo convierta a int, lo multiplique por 2 e informe el resultado por pantalla
let dato = prompt("Ingrese un número: ")
num = parseInt(dato);
num = num * 2;
console.log(num);

//Ejercicio 9: Complete el siguiente código en JavaScript para que reciba dos números, los convierta a int, determine cuál es el mayor de los dos y lo informe por pantalla.
let num1 = prompt ("Ingrese el Primer Numero: ");
let num2 = prompt ("Ingrese el Segundo Numero: ");
let resultado9;
num1 = parseInt(num1);
num2 = parseInt(num2);


if (num1 > num2)
{
   resultado9 = "El primero es el mayor";
}
else
{
   resultado9 = "El segundo es el mayor";
}

//Ejercicio 10: Complete el siguiente código en JavaScript para que reciba tres números, los convierta a int, determine el promedio e informe por pantalla si el alumno está aprobado o desaprobado. El promedio deberá ser mayor o igual a 4 para estar aprobado. 
let nota1 = prompt ("Ingrese la primera nota:");
let nota2 = prompt ("Ingrese la segunda nota:");
let nota3 = prompt ("Ingrese la tercera nota:");
let promedio;

nota1 =parseInt(nota1);
nota2 =parseInt(nota2);
nota3 =parseInt(nota3);

promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 4)
{
    console.log("APROBADO. " + "Nota Final: " + promedio);
}
else
{
    console.log("NO APROBADO. " + "Nota Final: " + promedio);
}
