const http = require('http')
const fs = require('fs')
//Crear un servidor
http.createServer((req,res) => {
    //Escribir una respuesta al recibir una petición
/*    res.write('Hello world from Nodejs')
    res.end() */

    //respuesta en el stream de la responde
    const myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8')

    res.writeHead(200, {'Content-type': 'text/plain'})
    // res.write('<h1>Helloo world from Nodejs http module</h1>')
    // res.end();
    //Respuesta en el sistema de la response
    myReadStream.pipe(res)
    // console.log(req)
})
.listen(5000, () => console.log('Servidor arrancado..'));
