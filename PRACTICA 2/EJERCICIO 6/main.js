const sizeArray = Number(prompt("Ingresa el tamaño de el arreglo:"))

let Arreglo = []

for(i=0; i<sizeArray; i++){
    let elementValue = prompt(`Ingresa el valor del elemento #${i+1}:`)

    Arreglo.push(elementValue)
};

console.log(`Tamaño del arreglo: ${Arreglo.length}`)

for(i=0; i<Arreglo.length; i++){
    console.log(`Elemento #${i+1} : ${Arreglo[i]}`);
};


