const EventEmitter = require("events")
const uuid = require('uuid')

//console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg){
        this.emit("alerta", {
        id: 
        uuid.v4(),
        msg,
    });
    }
}

module.exports = logger;
