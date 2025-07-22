const events = require('events')
const EventEmitter = events.EventEmitter
const connect = new EventEmitter()

connect.on('online', () => {
    console.log('A new user has been connected')
})

connect.on('offline', () => {
    console.log('A user has been offline')
})

connect.emit('online')
connect.emit('online')
connect.emit('offline')
connect.emit('online')