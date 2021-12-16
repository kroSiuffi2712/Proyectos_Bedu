//fs
const path = require('path');
const fs = require('fs');

//CRUD
/*
_dirname: Obtiene el nombre completo del directorio donde se encuentra el archivo actualmente ejecutado
__filename: obtenga el nombre del archivo con la ruta absoluta completa del archivo actualmente ejecutado
*/

//Crearemos un archivo utilizando la función : fs.writeFile()
fs.writeFile(path.join(__dirname, '/ejemplo1.txt'),'Este es contenido de mi archivo',{encoding:'utf-8'}, (err)=>{
    if(err) throw err;
    console.log('writefile:','Archivo creado');
});
//Para leer el contenido del archivo usaremos la función:  fs.readFile()
fs.readFile(path.join(__dirname, '/ejemplo1.txt'),{encoding:'utf-8'}, (error,data)=>{
    if(error) return console.error(error);
    console.log('readFile:',data);
});
//Podemos update sobre nuestro archivo añadiendo una nueva línea con el siguiente código : fs.appendFile()
fs.appendFile(path.join(__dirname, '/ejemplo1.txt'),'\nEsto es una nueva linea',(err)=>{
    if(err) throw err;
    console.log('appendFile:','Archivo actualizado');
});