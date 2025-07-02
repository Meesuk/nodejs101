const url1 = "kong.dev/file1.json"
const url2 = "kong.dev/file2.json"
const url3 = "kong.dev/file3.json"

function download(url, callback) {
    console.log(`dowloading: ${url}`)
    setTimeout(() => {
        callback(url)
    }, 1000)
}

download(url1, (result) => {
    console.log(`complete: ${result}`)

    download(url2, (result) => {
        console.log(`complete: ${result}`)

        download(url3, (result) => {
            console.log(`complete: ${result}`)
        })
    })
})