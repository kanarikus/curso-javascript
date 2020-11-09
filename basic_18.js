// hace falta usar todo lo aprendido
// escribe en pantalla la ficha del estudiante

// .toFixed(nº) asi limitas la cantidad de decimales, pero da valor de texto por lo que hay que transformarlo a numero

name = 'Manolo'
surname1 = 'Pérez'
surname2 = 'Gómez'

grade1 = 10
grade2 = 5

fullName = `${name} ${surname1} ${surname2}`
media = (grade1 + grade2)/2
media1 = media.toFixed(2)
prefijoMedia = ' '.repeat((fullName.length+2)/2 - media1.length/2)
sufijoMedia = ' '.repeat(fullName.length +2 - prefijoMedia.length - media1.length)


if (media <5) {
    resultado = '(SUSPENSO)'
} else {
    resultado = '(APROBADO)'
}

prefijoR = ' '.repeat((fullName.length+2)/2 - resultado.length/2)
sufijoR = ' '.repeat(fullName.length +2 - prefijoMedia.length - resultado.length)

console.log('*'.repeat(fullName.length+4))
console.log(`* ${fullName} *`)
console.log(`* ${' '.repeat(fullName.length)} *`)
console.log(`*${prefijoMedia}${media1}${sufijoMedia}*`)
console.log(`*${prefijoR}${resultado}${sufijoR}*`)
console.log('*'.repeat(fullName.length+4))