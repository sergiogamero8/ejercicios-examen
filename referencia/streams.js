const fs = require('fs')

//    console.log(fs.readFileSync(__dirname + '/data.txt'))
//    console.log("Leido....")

const myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8')
const myWriteStream = fs.createWriteStream(__dirname + '/data2.txt')

myReadStream.pipe(myWriteStream);
/*console.log('Nuevos datos recibidos...')
    //console.log(chunk)
    myWriteStream.write(`\n--------------------------------------------------
    *
    *
    * Holaaa
    \n`)
    myWriteStream.write(chunk)

}) */