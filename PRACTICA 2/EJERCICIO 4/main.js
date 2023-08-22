const Frutas = ["Pera","Manzana","Piña","Sandia","Guayava","coco"];

for(i = 0; i<Frutas.length; i++){
    console.log(`Fruta# ${i+1}: ${Frutas[i]} `)
};

let value = prompt("Ingresa un nuevo valor para el tercer elemento:")

let newValue = Frutas[2] = value;

console.log("-----------------------------------")
console.log(`- Elemento reemplazado por: ${newValue} `)
console.log("-----------------------------------")

for(i = 0; i<Frutas.length; i++){
    console.log(`Fruta# ${i+1}: ${Frutas[i]} `)
};




