function myfunction(name){
    console.log("Hey "+name+" your are good ")
}
// here name is the parameter given to function when its called 

function sum(a,b,c=3){

    // here default value is c is given as 3 if c value is not specified then it uses this default value else uses the value specified 

    console.log(a,b,c);
    return a+b+c;
    // return this to caller of the function 
}


myfunction("vedananda reddy")
// call the function with parameter 

let value=sum(5,9,11);
console.log(value);

// another way to create funcitons 

const average=(a,b)=>{
    return (a+b)/2
}
// a function average is declared which takes two parmeters (a,b) and returns    (a+b)/2

const flooraverage=(a,b)=>{
    return Math.floor((a+b)/2)
    // Math.floor converts to nearest largest integer 
}

console.log(average(5,6));
console.log(flooraverage(5,6))