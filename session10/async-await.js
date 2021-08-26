// Async/await
// 1. Simplest example
// const BETTER_PROMISE = async function() {
//     return `Indeed awesome!`
// }

// // const BETTER_PROMISE_CONSUMER = BETTER_PROMISE()
// // console.log(BETTER_PROMISE_CONSUMER) will output => Promise {`Indeed awesome`}

// // To output the actual string
// BETTER_PROMISE().then(result => console.log(result))

// // 2. Chainging Promises in Async/await

// const WAIT_FOR_BETTER_PROMISE = async () => {
//     const HOLD_VALUE_FROM_BETTER_PROMISE = await BETTER_PROMISE()

//     // if {![null, false, '', undefined].includes(HOLD_VALUE_FROM_BETTER_PROMISE)}
//     // return `${HOLD_VALUE_FROM_BETTER_PROMISE} Async/await does.`

//     const NOT_ALLOWED = [null, false, '', undefined, []]

//     return !NOT_ALLOWED.includes(HOLD_VALUE_FROM_BETTER_PROMISE)
//         ?
//         `${HOLD_VALUE_FROM_BETTER_PROMISE} Async/await does.`
//         : new Error(`Promise didn't resolve`)
// }

// WAIT_FOR_BETTER_PROMISE().then(result => {
//     result += '\nGood bye!'
//     console.log(result)
// }).catch(error => console.log(error))

//import the file system module 'fs promises and assign it to a variable
const FS = require('fs').promises

const READ_FILE = async (fileName) => {
    let results = await FS.readFile(fileName, 'utf-8') // here the encoding is optional
    return Buffer.from(results).toString()// return the Buffer as a string

}

READ_FILE('readme.md')
    .then(result => console.log(result))
    .catch(error => console.error(error))