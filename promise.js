// promise
const myPromise = new Promise((resolve , reject) => {
    let connect = false
    if(connect){
        resolve("conection establish")
    } else {
        reject(Error("connection filed"))
    }
}).then(
    (resolveValue) => console.log(`good ${resolveValue}`),
    (rejectValue) => console.log(`bad ${rejectValue}`)
)
console.log(myPromise)
