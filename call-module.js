/* const myModule = require('./modules/my-module')
const getCurrentTime = require('./modules/my-module').getCurrentTime */

const {getCurrentTime, formatMoney} = require('./modules/my-module')

console.log(getCurrentTime())
console.log(formatMoney(5000000))