// fs module used to  read write and work with files

const fs=require("fs")

// console.log(fs)
// modules used to work with files and modify or create them 


console.log("Starting ")
// fs.writeFileSync("new.txt","Content")
// this is blocking code which takes two parameters file name and content to write into it 


// fs.writeFile("new.txt","Content again" ,()=>{
//     console.log("Done Writing the file ")
//     fs.readFile("new.txt",(error,data)=>{
//         // console.log(error,data)
//         // to read data using this we need to convert it into a string using toString 

//         // console.log(error)
//         // shows error if any else null 
//         console.log(error,data.toString())
//     })
// })



// this function runs asynchronously without blocking and takes a  callback function as a parameter , in case of multiple callbacks can cause callback hell  so we use fs/promises to avoid this and maintain the code properly


fs.appendFile("new.txt","\nThis is appended content",(e)=>{
    // append function only passes error and not data 
    console.log("appended")
    console.log(e)
})

// appends the end of file without writing it 





console.log("Done")



