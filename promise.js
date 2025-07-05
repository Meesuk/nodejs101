const url1 = "kong.dev/file1.json"
const url2 = "kong.dev/file2.json"
const url3 = "kong.dev/file3.json"
const connect = true

function download(url) {
    console.log(`dowloading: ${url}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (connect) {
                resolve(`complete: ${url}`)
            } else {
                reject(`error: ${url}`)
            }
        }, 3000)
    })
}

/* download(url1)
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    console.log('End of process')
}) */

download(url1)
.then(result => {
    console.log(result)
    return download(url2)
})
.then(result => {
    console.log(result)
    return download(url3)
})
.then(result => {
    console.log(result)
})