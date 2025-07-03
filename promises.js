// promises
const myPromises = new Promise((resolveFunction , rejectFunction) => {
    let emploees = ["Mohamed" ,"Ali" , "Omer"]
    if(emploees.length === 3){
        resolveFunction(emploees)
    } else {
        rejectFunction(Error("Number of emploees is not 3"))
    }
})

myPromises.then((resolveValue) => {
    resolveValue.length = 2
    return resolveValue
})
myPromises.then((resolveValue) => {
    resolveValue.length = 1
    return resolveValue
})
myPromises.then((resolveValue) => {
    console.log(`The chosen value is ${resolveValue}`)
}).catch((rejected) => console.log(rejected))
.finally((final) => console.log(` The operation is don`))
