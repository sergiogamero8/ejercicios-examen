const http = require('http')

//Crear un servidor
http.createServer((req,res) => {
    //Escribir una respuesta al recibir una petición
    res.write('Hello world from Nodejs')
    res.end()

    //console.log(req)
}).listen(5000, () => console.log('Servidor arrancado..'))