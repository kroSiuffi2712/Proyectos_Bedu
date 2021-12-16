const fs=require("fs");

function readFile(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, "utf-8", (error, data)=>{
            if (error) return reject(error);
            return resolve(data);
        })
    })
}

readFile("./archivo.txt").then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

/************/
let promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let numero = Math.random();
        if (numero>=0.5) resolve("Exito");
        reject("Error");
    },2000);
});
promesa.then((data)=> console.log(data)).catch((data)=> console.log(data));
console.log("Inicio");