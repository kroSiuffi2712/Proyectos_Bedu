function holamundo(){

};

holamundo();

const suma = (a,b)=> a + b;

suma(2,3);

//callback
const resta=(a,b, callback)=>{ 
    callback("callback");
    return a - b;
};

console.log(resta(4,5, (g)=>{
    console.log(g);
}));

//funcion sincrona
function primero(){
    console.log("soy 1");
}

function segundo(){
    console.log("soy 2");
}

function tercero(){
    console.log("soy 3");
}

primero();
segundo();
tercero();

function primerocb(){
    setTimeout(()=>{
        console.log("soy el primero cb");
    },5000);
}

function segundocb(){
    setTimeout(()=>{
        console.log("soy el segundo cb");
    },6000);
}

function tercerocb(){
    setTimeout(()=>{
        console.log("soy el tercero cb");
    },7000);
}

primerocb();
segundocb();
tercerocb();

setTimeout(function () {
    console.log("Soy el 1");
    setTimeout(function () {
      console.log("Soy el 2");
      setTimeout(function () {
        console.log("Soy el 3");
        setTimeout(function () {
          console.log("Soy el 4");
          // Podría a ver más llamadas asíncronas
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
  
