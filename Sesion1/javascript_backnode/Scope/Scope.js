//Scope Global
var nombre = "Caro";
var segundonombre="Lati"

function foo(){
    console.log(nombre);
    console.log(segundonombre);
}
foo();
console.log();
/*
function foo2(){
    var nombre="Pablo";
    console.log(nombre2);
}
foo2();
*/
//Scope condicional
if (true){
    var myname="Pedro"
    console.log(myname);
}
console.log(myname);

//Scope Bucles
var numbers=[1,2,3,4,5];
var dubles=[];
for(var i=0; i<numbers.length; i++){
    dubles.push(numbers[i]*2);
}
i=10;
console.log(numbers);
console.log(dubles);
console.log(i);
