// alert("Mensaje de alerta en javascript!!")


// console.log("Estas usando la consola")
// console.log(20)
// console.log(1.2)
// console.log(true)
// console.log(false)


//DECLARACION USANDO VAR    
// var x = 10;
// console.log(x);

// x = 20;
// console.log(x);

// x = 100;
// console.log(x);

//DECLARACION USANDO LET
// let y = 5;
// console.log(y);
// y = 20;   //REASIGNACION VALIDA
// console.log(y);
// let y = 20   //REASIGNACION NO VALIDA

//DECLARACION USANDO CONST
// const pi = 3.14;
// console.log(pi);

// pi = 30;    // No se puede reasignar
// console.log(pi);


//ACTIVDAD
//Mostrar por consola tu nombre y edad.
// let name = "Jefersson Bladimir"
// let lastName = "Trejos Lovo";
// let age = 20;
// console.log(`Mi nombre es ${name} ${lastName} y mi edad es ${age}`)




// //Mostrar un mensaje de alerta.
// let nombre = "Jefferson Bladimir Trejos Lovo";
// let edad = 20;
// let mensaje = "Mi nombre: "+nombre+" y mi edad: "+edad
// alert(mensaje);




//Programa que genere una tabla de multiplicar basada en el número
//ingresado por el usuario. Deberás usar las funciones prompt y un bucle for para lograrlo

// const numero = parseInt(prompt("Ingrese un numero para generar su tabla de multiplicar: "))

// console.log(`Tabla de multiplicar del ${numero}`);

// for(let i = 1; i<=15; i++){
//     const resultado = numero*i; 
//     console.log(`${numero} x ${i} = ${resultado}`)
// };




//Programa que solicite al usuario ingresar un número utilizando prompt, y
//luego utiliza la estructura if para evaluar si el número es positivo, negativo o
//cero. Dependiendo del valor ingresado, se imprimirá el mensaje correspondiente en la consola
const numero = parseInt(prompt("Ingrese un numero:"));

if(numero > 0){
    console.log(`El numero: ${numero} es positivo`);
}else if(numero<0){
    console.log(`El numero: ${numero} es negativo`);
}else{
    console.log(`El numero: ${numero} es igual a 0`);
}