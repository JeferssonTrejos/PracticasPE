console.log("---------------------1-------------------------")
//1 - push(): Agrega uno o más elementos al final del array.
let numeros = [1,2,3];
numeros.push(4,5,6)
console.log(numeros)



console.log("---------------------2-------------------------")
//2 - pop(): Elimina y devuelve el último elemento del array.

let frutas = ['Manzana','Banana','Uva']
let ultimaFruta = frutas.pop()
console.log(ultimaFruta)
console.log(frutas)



console.log("---------------------3-------------------------")
//3 - unshift(): Agrega uno o más elementos al inicio del array.

let colores = ['verde','amarillo'];
colores.unshift('azul','blanco');
console.log(colores)



console.log("---------------------4-------------------------")
//4 - shift(): Elimina y devuelve el primer elemento del array.
let paises = ['El Salvador','Peru','Rusia']
let primerElemen = paises.shift();
console.log(primerElemen)
console.log(paises)



console.log("---------------------5-------------------------")
//5 - concat(): Combina dos o más arrays para crear un nuevo array
let array1 = [1,2];
let array2 = [3,4];
let combinacionArray = array1.concat(array2);
let combinacionArray2 = array2.concat(array1);

console.log(combinacionArray);
console.log(combinacionArray2);



console.log("---------------------6-------------------------")
//6 - slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados.
let arrayOriginal = [1,2,3,4,5];
let copiaArray = arrayOriginal.slice(1,4); 
console.log(copiaArray);



console.log("---------------------7-------------------------")
//7 - splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.
let Frutas2 = ['Bananas','Naranja','Kiwi','Pera','Manzanaba']
let removerFrutas = Frutas2.splice(2,1,'Uva');
console.log(Frutas2);
console.log(removerFrutas);


console.log("---------------------8-------------------------")
//8 - forEach(): Ejecuta una función para cada elemento del array.





console.log("---------------------9-------------------------")
//9 - map(): Crea un nuevo array aplicando una función a cada elemento del array original.

console.log("---------------------10-------------------------")
//10 - filter(): Crea un nuevo array con todos los elementos que pasan una prueba (función proporcionada).
