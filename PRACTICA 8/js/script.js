//Bubble sort (ordenamiento por burbujas)
// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }

//         }
//     }
//     return arr
// };

// let arr = [64, 34, 25, 12, 11, 90];
// console.log(bubbleSort(arr))





// //Ejercicio Intermedio: Ordenar un array de objetos por una propiedad específica. 
// function bubbleSort(arr, prop) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1; j++) {
//             if (arr[j][prop] > arr[j + 1][prop]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1]; arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [
//     { name: "Mary", age: 30 },
//     { name: "Bob", age: 20 },
//     { name: "John", age: 25 },
// ];
// console.log(bubbleSort(arr, "age"));





//Ejericio 3
//Ordenar array de numeros en arden ascendendente
// function selectionSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min !== i) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp
//         }

//     }
//     return arr
// }

// let arr3 = [64, 34, 25, 12, 11, 90];
// console.log(selectionSort(arr3));

//ejercicio 4

function selectionSort(arr, prop) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let min = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j][prop] < arr[min][prop]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }

    }
    return arr
}
let arr = [
    { name: "Mary", age: 30 },
    { name: "Bob", age: 20 },
    { name: "John", age: 25 },
];
console.log(selectionSort(arr, "age"));