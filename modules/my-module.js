const hello = 'Hello! This is module.'

function getCurrentTime() {
    return new Date()
}

function add(x, y) {
    return x + y
}

function formatMoney(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

module.exports = {
    hello,
    getCurrentTime,
    add,
    formatMoney
}