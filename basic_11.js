temperatura = 36;
tos = false;
umbral = 37;

// si queremos que se cumpla una condicion O la otra usaremos "||" con ello evaluamos 2 condiciones.
//en este caso tiene que cumplirse una de las 2 condiciones

if (temperatura>=umbral || tos===true) {
    console.log('pasa pal medico pailan')
} else {
    console.log('estás perita')
}