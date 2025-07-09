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

async function start() {
    console.log(await download(url1))
    console.log(await download(url2))
    console.log(await download(url3))
}

start()