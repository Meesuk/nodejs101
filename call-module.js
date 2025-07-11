const myModule = require('./modules/my-module')
const getCurrentTime = require('./modules/my-module').getCurrentTime

console.log(myModule.getCurrentTime())
console.log(getCurrentTime())
console.log(myModule.formatMoney(5000000))