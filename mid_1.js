// // calcula la nota media , si tenemos 2 notas, y si son 4? y si son 5?

// miArray = [5, 90, 5, 70]
// miArray2 = ['a', 'b']

// //longitud
//  length = miArray.length;
//  console.log(`la longitud es ${length}`)

// //primer elemento
// firstElement = miArray[0]
// console.log(`el primer elemento es ${firstElement}`)

// //segundo elemento
// secondElement = miArray[1]
// console.log(`mi segundo elemento es ${secondElement}`)

// //ultima posicion
// lastElement = miArray[miArray.length-1]
// console.log(`la ultima posicion es ${lastElement}`)

// //añadir elementos
// miArray.push(9000)
// console.log(miArray)


//calcula la media del siguiente array

// notas = [7.9, 8.1, 1, 2]
// notasTotales = notas.length
// suma = 0

// // este es el for...of
// for (nota of notas) {
//     // suma = suma + nota es igual a lo de abajo
//     suma += nota
// }

// console.log(suma)
// resultado = suma/notasTotales
// console.log(resultado)

// suma = 0
// for (i=0; i<notasTotales; i=i+1) {
//     suma = suma + notas[i]
// }
// resultado = suma/notasTotales

// //i = i+1
//i+=1
//i++


//calcula la media de los elementos que sean iguales o mayores a 5

notas = [7.9, 9.1111, 1, 2]

notaTotales = notas.length
console.log(notaTotales)
suma = 0
contador = 0

for (i=0; i<notaTotales;i++) {
    if (notas[i]>=5) {
        suma+=notas[i]
        contador++
    }

}
resultado = suma/contador
console.log(suma)
console.log(contador)
console.log(resultado)
