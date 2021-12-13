const EventEmitter = require('events')

//Extendemos de la clase Emitter
class MyEmiter extends EventEmitter {}
//Inicializamos un objeto Emiter
const myEmiter = new MyEmiter()

//Creamos el listener
myEmiter.on('evento', (data) => console.log('Evento recibido...', data))

myEmiter.emit('evento', {id: 1, msg: "Hola log"})
