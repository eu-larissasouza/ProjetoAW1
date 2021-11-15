/* ====== Callback > Promise > Async/Await ====== */

const { rejects } = require('assert')
const fs = require('fs')

console.log(1)

/* ==== CALLBACK ==== */

/*  Function */
/*function callback(err, contents) {
    console.log(err, String(contents))
}
fs.readFile('txt/in1.txt', callback)*/

/*  Arrow function */
/*const callback = (err, contents) => {
    console.log(err, String(contents))
}
fs.readFile('txt/in1.txt', callback)*/

/*  Callback na própria chamada */
/*fs.readFile('txt/in1.txt', (err, contents) => {
    fs.readFile('txt/in2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err2, String(contents2))
    })
})*/

/* ==== PROMISES ==== */

/*  Arrow function */
const readFile = file =>
    new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if (err) {
                reject(err)
            } else {
                resolve(contents)
            }
        })
    })

/*readFile('../txt/in1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('txt/in2.txt')
    })
    .then(contents => {
        console.log(String(contents))
    })*/

/*readFile('txt/in1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('txt/in2.txt')
    })
    .then(contents => {
        console.log(String(contents))
    })*/

/* ==== ASYNC/AWAIT ==== */
/* Açúcar sintático em cima da Promise */
const init = async() => {
    try {
        const contents = await readFile('txt/in1.txt')
        const contents2 = await readFile('txt/in2.txt')
        return String(contents) + '\n' + String(contents2)
    } catch (err) {
        console.log(err)
    }
}
init().then(contents => console.log(contents))

console.log(2)

console.log(3)