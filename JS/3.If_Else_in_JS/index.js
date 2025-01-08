

let age=0;


// if else if else ladder 
if(age>18){
    console.log("You can drive ")
}
else if(age==18){
    console.log("You can drive after one year")
}
else if(age==0){
    console.log("Enter a valid age ")
}
else{
    console.log("You can't drive")
}


let a=8;

let b=5;

// ternary operator 
a>b ? console.log("a is greater than b"): console.log("b is greater than a")
// short form of if else 

let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/


let n=9;
let m="9"
if (n==m){ 
    // "==" operator only checks if the value of them are equal not the types 
    console.log("They are equal")
}



// for checking if values and types are equal we have to use "==="
if (n===m){ 
    console.log("They are exactly equal")
}
else{
    console.log("They are not exactly equal")
}



// relational operators
// and : true if both are true else false 
if(a<b && n==m){
    console.log("Both satisfied")
}
else{
    console.log("Both are not satisfied ")
}


// or : true if either one is true else false 
if(a<b || n==m){
    console.log("atleast one is  satisfied")
}
else{
    console.log("Both are not satisfied ")
}