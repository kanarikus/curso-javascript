name = 'Antonio';
surname = 'Pires';
surname2 = 'Abad';

// console.log(name[2])
// console.log(name.length)
fullname = `${surname} ${surname2}, ${name} (${name[0]}${surname[0]}${surname2[0]})`;
finales = `${name[name.length-1]}${surname[surname.length-1]}${surname2[surname2.length-1]}`

console.log(fullname)
console.log(finales)
console.log(finales.toUpperCase())
console.log(name[1000])
