// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// In node all function comes in global not in window

Register a listener
emitter.on('messageLogged' callback)

// Raise a Event
emitter.emit('messageLogged')

const EventEmitter = require('event');

const url = 'http://mylogger.org'

class Logger extends EventEmitter {
log(message){
console.log(message);
this.emit('messageLogged', {id:1, url})
}
}

module.export = Logger

### App.JS

const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLogged', callback)

logger.log('message')

===============================================

### Restfukll - Representational State Transfer

CRUD - Create, Read, Update , Delete
*http://domain.com/api/customers*

# HTTP Method - GET, POST, PUT, Delete, Patch
