const http = require('http')
const path = require('path')
const fs = require('fs')
const moment = require('moment')

function getPage(page) {
    return fs.readFileSync(path.join(__dirname, page))
}

function handlePage(req, res) {
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
}

function handleAPIs(req, res) {
    let data
    if (req.url === '/apis/users') {
        data = [{name: 'John'}, {name: 'Sara'}]
    } else if (req.url === '/apis/posts') {
        data = [
            {title: 'A', publishedDate: moment().startOf('day').fromNow()},
            {title: 'B', publishedDate: moment().set('month', 1).startOf('day').fromNow()}
        ]
    }

    if (data) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(data))
    } else {
        res.writeHead(404)
    }

    res.end()
}

http.createServer((req, res) => {
    if (req.url.startsWith('/apis/')) {
        handleAPIs(req, res)
    } else {
        handlePage(req, res)
    }
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
})