name = 'Antonio'

// primera mitad
firstPart = name.slice(0, name.length/2)
console.log(`Primera parte:${firstPart}`);

//segunda mitad
secondPart = name.slice(name.length/2, name.length)

console.log(`Segunda parte:${secondPart}`)

//eliminar primera y ultima letra

noName = name.slice(1, name.length-1)
noName2 = name.slice(1, -1)

console.log(noName)
console.log(noName2)

//primera y ultima en mayuscula

ultimaLetra = name.toUpperCase().slice(name.length-1)
primeraLetra = name.toUpperCase()[0]
mayuscName = `${primeraLetra}${noName.toLowerCase()}${ultimaLetra}`

console.log(mayuscName)