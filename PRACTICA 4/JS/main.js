// //FOREACH se ejecuta 1 ves por cada elemento de un arreglo
// let numbers = [1, 2, 3];
// numbers.forEach(function (number) {

//     console.log(number * 2)

// });


// //FOREACH con objetos
// const products = [
//     { name: 'Camisa', precio: 20 },
//     { name: 'Jeans', precio: 25 },
//     { name: 'Zapato', precio: 80 },
//     { name: 'Sombreso', precio: 10 }
// ];

// let precioTotal = 0;

// products.forEach(function (producto) {
//     precioTotal += producto.precio

// })

// console.log(`Precio total a pagar: ${precioTotal}`)



// //----------------------------------------

// let numbers1 = [1, 2, 3];
// let nuevoArreglo = numbers1.map(function (number) {
//     return number * 2
// });

// console.log(nuevoArreglo)


// //------------------------------------------
// //Convertir grados centigrados a grados Firenheith

// const Gcelcius = [0, 15, 30, 5, 10];
// const Gfarenheith = Gcelcius.map(function (celcius) {
//     return (celcius * 9 / 5) + 32;
// });

// console.log(`Grados farenheit: ${Gfarenheith}`);
// console.log(`Grados celcius: ${Gcelcius}`);

// //---------------------------------------------------------
// //filter(): Crea un nuevo array con todos los elementos
// //que pasan una prueba (función proporcionada).
// //Ejercicio 1
// const nums = [2,8,3,6,10,4,7];

// const nums2 = nums.filter(function(numero){
//     return numero > 5;
// });

// console.log(nums2)


// //Ejercicio 2
// const personas = [
//     {Nombre:'Yancy',edad:24},
//     {Nombre:'Jose',edad:17},
//     {Nombre:'Luciana',edad:20},
//     {Nombre:'Kevin',edad:15},
//     {Nombre:'Plutarca',edad:20}
// ];

// const adultos = personas.filter(function(person){
//     return person.edad > 18;
// });

// console.log(adultos);


// //--------------------------------------------------------
// //reduce(): Aplica una función a un acumulador y a cada elemento de un
// //arreglo (de izquierda a derecha) para reducirlo a un solo valor.

// let num = [1,2,3,4];
// let sum = num.reduce(function(acumulador,valorActual){

//     return acumulador + valorActual
// });

// console.log(sum);


// //-----------------------------------------------------------
// //every(): Comprueba si todos los elementos de un arreglo
// //cumplen una condición dada y devuelve true o false

// let number = [1,2,3,4,5];
// let mayorCero = number.every(function(number){
//     return number>0
// });

// console.log(mayorCero);


// //---------------------------------------------------------------
// //some(): Comprueba si al menos un elemento de un arreglo
// //cumple una condición dada y devuelve true o false.

// let number2 = [1,2,3,4,5];

// let numeroPar = number2.some(function(number){
//     return number % 2 == 0;
// });

// console.log(numeroPar);


// //--------------------------------------------------------------------
// //sort(): Ordena los elementos de un arreglo en 
// //orden alfabetico (sin crear un nuevo arreglo)

// let nombres = ['Margarita','Alberto','Secia','Santiago'];
// nombres.sort();
// console.log(nombres);




console.log('------------------------ACTIVIDAD-------------------------')
//Ejercicio #1 usando forEach()
//tabla de multiplicar del 10
let numeros = [1,2,3,4,5,6,7,8,9,10];

let tablaDeMultiplicar = numeros.forEach(function(num){
    console.log(`10 * ${num} + `+10*num);
});


//Ejercicio #2 usando sort() 
//Ordena el nombre de las vitaminas A, B, C Y D
let vitaminas = ['D1','C11','A1','B12','C16','B5']
vitaminas.sort()
console.log(vitaminas)


//Ejercicio #3 usando map()
//Le suma 30 a cada numero
let nums = [12,43,76,23,5,32,65];
let newNums = nums.map(function(num){
    return num +30
});

console.log(newNums);



