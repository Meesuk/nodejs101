const hello = 'Hello! This is module.'

function getCurrentTime() {
    return new Date()
}

function add(x, y) {
    return x + y
}

module.exports = {
    hello,
    getCurrentTime,
    add
}