//indica con letras la nota media 
//de un estudiante a partir de sus 3 notas parciales
// de a 4.9 suspenso
//de 5 a 5.9 aprobado
//de6 a 6.9 bien
//de 7 a 8.9 notable
//de 9 a 10 sobresaliente

grade1 = 1
grade2 = 7
grade3 = 10

media = (grade1 + grade2 + grade3)/3;

// if (media<5) {
//     console.log('suspenso')
// } else if (media>=5) {
//     console.log('aprobado')
// } else if (media >=6) {
//     console.log('bien')
// } else if (media>=7) {
//     console.log('notable')
// } else (media>=9) {
//     console.log('sobresaliente')
// }
//de esta forma no sirve porque si se saca mayor que aprobado quedaria estancado en el primer else if

if (media<5) {
    console.log('suspenso')
} else if (media<6) {
    console.log('aprobado')
} else if (media<7) {
    console.log('bien')
} else if (media<9) {
    console.log('notable')
} else {
    console.log('sobresaliente')
}
    

// hay que escribir por pantalla la generacion a la que perteneces 
// dependiendo del año de nacimiento

// Z(1995-actualidad)
// millenials (1981-1994)
// generacion X (1969-1980)
// baby boom (1949-1968)

birthYear = 1923

//magic numbers

if (birthYear>1995) {
    console.log('generación Z')
} else if (birthYear<1995 && birthYear>=1980) {
    console.log('generación millenial')
} else if (birthYear<1980 && birthYear>=1969) {
    console.log('generacion X')
}else if (birthYear<1969 && birthYear>=1949) {
    console.log('baby boom')
} else {
    console.log('extrema unción')
}


// hacer una calculadora simplificada, del IRPF
// y sus tramos

// de 0 a 12450€: 19%
// de 12450 a 20200€: 24%
// de 20200 a 35200€: 30%
// de 35200 a 60000€: 37%
// mas de 60000€: 45%

salario = 70000;

tierC = 12450
tierB = 20200
tierA = 35200
tierS = 60000

tipo1 = 0.19
tipo2 = 0.24
tipo3 = 0.3
tipo4 = 0.37
tipo5 = 0.45

if (salario <=tierC) {
    retencion = (salario*tipo1)
} else if (salario>tierC && salario<=tierB) {
    retencion = ((tierC*tipo1)+((salario-tierC)*tipo2))
} else if (salario>tierB && salario<=tierA) {
    retencion = (tierC*tipo1+(tierB-tierC)*tipo2+(salario-tierB)*tipo3)
} else if (salario>tierA && salario<=tierS) {
    retencion = (tierC*tipo1+(tierB-tierC)*tipo2+(tierA-tierB)*tipo3+(salario-tierA)*tipo4)
} else {
    retencion = (tierC*tipo1+(tierB-tierC)*tipo2+(tierA-tierB)*tipo3+(tierS-tierA)*tipo4+(salario-tierS)*tipo5)
}

console.log(`La retención aplicada al salario de ${salario} es de ${retencion}`)