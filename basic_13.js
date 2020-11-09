// hacer un sistema de calificacion automatica de tweets.
// si tiene la palabra psoe, POP, VOX, CS Podemos llevara la etiqueta politica
// si tiene las palabras Javascript,, PHP, Python llevara la etiqueta programacion

tweet1 = 'aprendiendo javascript en vigo'
tweet2 = 'empezando el segundo modulo del bootcamp'
tweet3 = 'vox y podemos llegan a un acuerdo'
tweet4 = 'no hay quien entiendo php, me paso a java'
tweet5 = 'deja el psoe para dedicarse a javascript'

tweet = tweet5.toUpperCase();

politica = tweet.indexOf('PSOE') !==-1 || tweet.indexOf('PP') !==-1 || tweet.indexOf('CS') !==-1 || tweet.indexOf('PODEMOS') !==-1 || tweet.indexOf('VOX') !==-1

programacion = tweet.indexOf('JAVASCRIPT') !==-1 || tweet.indexOf('PHP') !==-1 || tweet.indexOf('PYTHON') !==-1

console.log(`Es de politica? ${politica}`)
console.log(`Es de programacion? ${programacion}`)
