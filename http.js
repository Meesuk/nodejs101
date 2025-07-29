const http = require('http')
const path = require('path')
const fs = require('fs')

function getPage(page) {
    return fs.readFileSync(path.join(__dirname, page))
}

http.createServer((req, res) => {
    const fileType = path.extname(req.url) || '.html'
    
    if (fileType === '.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})

        if (req.url === '/') {
            res.write(getPage('index.html'))
        } else {
            res.write(getPage(`${req.url}.html`))
        }
        res.end()
    } else if (fileType === '.css') {
        res.writeHead(200, {'Content-Type': 'text/css'})
        res.write(getPage(req.url))
        res.end()
    } else {
        res.writeHead(404)
        res.end()
    }
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
})