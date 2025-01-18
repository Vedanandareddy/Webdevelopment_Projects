// usually program stops when an error occurs 
// so try catch syntax is used to catch these errors and continue the program without dying 

let a=parseInt( prompt("Enter the first Number"))
let b=parseInt(prompt("Enter the second Number"))
// the prompt takes input as a string  and parseInt converts this into a number

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Enter a valid input")
    // errors thrown if a condition is met 
}
// for continuation of code after the error we use try catch which catches the errors and maintains the flow of code without stopping due to error 

try {
    console.log("The result of operations is " + (a+b)*y)
} catch (error) {
    // here errors are catched an error object is given to the catch block 
    // error object contains 2 main properties name,message,stack
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
finally{
    console.log("Completed")
}
// catch block is executed when there is an error in the try block 
// try catch works synchronously , if there is an error in the scheduled code in try catch block it doesnot work 
// finally block executes in both cases but the main use of finally block is when try catch is used inside a function and both return at the end of their block ,by using finally it runs even after the return statement in the function 

console.log("The sum of the numbers is "+(a+b))


// custom errors can also be thrown 
age=250;
if(age>180){
    throw new Error("invalid age ")
}


