const path = require('path')
const fs = require('fs')

// fs.writeFileSync(path.join(__dirname, 'data-sync.txt'), 'Hello')
/* fs.writeFile(path.join(__dirname, 'data.txt'), 'Hello', (err) => {
    if (err) return console.log(err)
    console.log('Finished writing file')
}) */

/* console.log(fs.readFileSync(path.join(__dirname, 'data-sync.txt'), 'utf-8'))
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf-8')) */
fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8', (err, data) => {
    if (err) return console.log(err)
    console.log(data)
    console.log('The File has been loading.')
})