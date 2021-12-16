//Postwork Implementar modulo de tercero moment
const moment= require("moment");
var now = moment();
console.log(`Fecha y hora => ${now.format('LLL')}`);
console.log(`Fecha, hora y día de la semana => ${now.format('LLLL')}`);
console.log(`Sumar 1 mes a la fecha actual => ${now.add(1,'months').format('LLLL')}`);

