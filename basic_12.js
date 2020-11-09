// name = 'Jorge Manuel'
// indice = name.trim().indexOf('e')

// console.log(indice)
// if (indice !== -1) {
//     console.log('nombre compuesto')
// }

//estrae el hastag de las variables

tweet1 = 'aprendiendo #JavaScript en hack a boss'
tweet2 = 'empezando el modulo de bootcamp!'
tweet3 = 'hack a boss #JavaScript hola #codiglive'

tweet1R = tweet1.indexOf('#')
texto1 = tweet1.indexOf(' ', tweet1R)
r1 = tweet1.slice(tweet1R, texto1)

tweet2R = tweet2.indexOf('#')
texto2 = tweet2.indexOf(' ', tweet2R)
r2 = tweet2.slice(tweet2R, texto2)

tweet3R = tweet3.indexOf('#')
texto3 = tweet3.indexOf(' ',tweet3R)
r3 = tweet3.slice(tweet3R, texto3)

ultimo = tweet3.indexOf('#', texto3)
textofinal = tweet3.indexOf(' ',ultimo)
rfinal = tweet3.slice(ultimo, textofinal)



// console.log(tweet1R)

if (tweet1R !== -1) {
    console.log(r1)
}

if (tweet2R !==-1) {
    console.log(r2)
}
 if (tweet3R !==-1) {
     console.log(r3)
     if (ultimo !==-1) {
         if (textofinal ===-1) {
             rfinal = tweet3.slice(ultimo)
         }
         console.log(rfinal)
     }
 }


