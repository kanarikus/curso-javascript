name = 'Antonio    ';
surname1 = '   Pires';
surname2 = 'Abad    ';

nameFixed = name.trim()
surnameFixed = surname1.trim()
surname2Fixed = surname2.trim()

iniciales = `${nameFixed[0]}${surnameFixed[0]}${surname2Fixed[0]}`
fullname = `${surnameFixed} ${surname2Fixed}, ${nameFixed} (${iniciales})`;

console.log(fullname)
