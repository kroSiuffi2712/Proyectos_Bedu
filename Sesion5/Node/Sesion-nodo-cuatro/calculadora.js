const tipoOperacion = process.argv[2];
const num1=Number(process.argv[3]);
const num2=Number(process.argv[4]);


switch(tipoOperacion){
    case'Suma':
        console.log(`${num1} + ${num2} = ${num1+num2}`)
        break;
    case'Resta':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
        break;
    case'Multiplicacion':
        console.log(`${num1} * ${num2} = ${num1*num2}`)
        break;
    case'Division':
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        break;
    default:
        break;
    
}

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stout
})


readline.question('¿Quien eres?',name=>{
    console.log(`Hola  ${name}`);
    readline.close();
});