import fs from "fs/promises"


let a =await fs.readFile("new.txt")
// here it can be directly awaited as type  module is an async 

let b=await fs.writeFile("another.txt","This promise is amazing ")


console.log(a)
console.log(a.toString())