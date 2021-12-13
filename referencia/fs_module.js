const fs = require("fs");
const { parse } = require("path");
const path = require("path");

//Crear un dir
//fs.mkdir(path.join(__dirname, 'test'),{ recursive: false}, (err) => {
   //if (err) 
        // throw err;
    //console.log("DIrectorio creado correctamente...");
//});

//Crear y escribir archivos
//fs.writeFile(
  //  path.join(__dirname,"test", "hello.txt"),
   // "Hola mundo > Hola que ace", 
   // (err) => {
     //   if (err) throw err;
       // console.log("Archivo ok!");
    // }
  //  );

 // fs.appendFile()
 /*(path.join(__dirname, "test", "hello.js"),
   "const a = 19",
   (err) => {
       if (err) throw err;
    console.log("aRCHIVO ACTUALIZADO Ok!");
    }
 ); */

 //Leer un archivo
 /*fs.readFile(
     path.join(__dirname, "test", "hello.txt"),
     'utf-8',
     (err,data) => {
         if(err) throw err.code;
         console.log(data, error)
     }

) */

/*fs.rename(
    path.join(__dirname,"test", "pato.txt"),
    path.join(__dirname, "test", "renombrado.txt"),
    err => {
        if(err){
            ('throw err');
        }
        console.log('All ok!');
    });
*/


//Copiar un archivo
/*
fs.copyFile(
    path.join(__dirname,"test", "renombrado.txt"),
    path.join(__dirname, "test", "renombrado2.txt"),
    err => {
        if(err){
            ('throw err');
        }
        console.log('El archivo sea copiado!');
    });
*/
//Mover un archivo
/*
fs.copyFile(
    path.join(__dirname,'./renombrar.txt', '.'),
    err => {

        if(err){
            ('throw err');
        }
        console.log('El archivo sea movido!');
    });
*/
//Eliminar un archivo
/*
fs.unlink(
    path.join('test/renombrado.txt'),
    err => {
        if(err){
            ('throw err');
        }
        console.log('Se eliminado el archivo');

    });
*/
//Crear una carpeta, si esta se crea bien crear un 
//archivo .json dentro con algunos objetos,
//luego leer el archivo y mostrar los objetos por
//consola

const user = [
    { name: "Uno"},
    { name: "dos"},
    { name: "tres"},
    { name: "cuatro"},
];

//crear la carpeta
fs.mkdir(path.join(__dirname, "Users"), {}, (err) => {
    if(err) ('throw err');
    console.log("Dir ok!!");

//creamos el archivo
fs.writeFile(
    path.join(__dirname, "Users","users.json"),
    JSON.stringify(users),
    
    (err) => {
if (err) throw err;
console.log("File ok!!");

        //Leemos el json
    /*    fs.readFile(
            path.join(__dirname, "users", "users.json"),
            (err, data) => {
                //Mostrar los datos
            const users= JSON.parse(data)
            users.forEach(user => {
                console.log(user.name);
            });

            }
        );

    }
);
}); */
fs.readdir(__dirname, (err, files) => {
    if(err) throw err
    console.log(files);
})