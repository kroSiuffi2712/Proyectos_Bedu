//Scope
var // Tiene un scope global y tambien local pero no todo los casos.
let //Tiene un scope global y tambien en todo los casos de uso local.

const //scope global pero inmutable.

const colors =["red","blue","yellow","green"];
const copyColors=[...colors];

console.log(copyColors);

const book={
    author:"",
    title:"",
    year:""
}

const copyOfBook={...book};
const copyOfBook1=book;
const copyOfBook2={...book, year:2019}

console.log(copyOfBook);
console.log(copyOfBook1);
console.log(copyOfBook2);