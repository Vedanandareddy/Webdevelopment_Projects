async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(50)
        }, 2000);
    })
}
// this function sleeps for 2 seconds this executes only in an async function  
// for running a function as soon as its invoked we use iife  Immediately Invoked Function Expression to avoid global namespace where all gobally defined variables or functions are stored so that thery are  available globally

// IIFE 
(async function main(){
    // let a=await sleep();
    // console.log(a);
    // let b=await sleep();
    // console.log(b);
    
    // destructuring is a way to extract values from array or properties from objects 
    let [x,y]=[1,2,3]
    console.log(x);
    console.log(y);
    // destructuring used to extract values from the array only matching number of values are assigned 3 is not assigned as there are only two values on the left hand side 

    let [n,l,...rest]=[1,2,3,4,5,6,7,8,9]
    console.log(n,l,rest);
    // here "..." is a spread operator that spreads the iterables into seperate  values 

    const obj={a:1,b:2}
    // destructuring objects 
    let {b,a }=obj
    // when destructuring objects variables and properties name should be same 
    console.log(a,b);


    // "..." spread operator allows iterable like an array or string to expand in places where zero or more arguments are expected 
    function sum(a,b,c){
        return a+b+c;
    }
    let arr=[1,2,3]
    console.log(sum(...arr));
    // using spread operator the array is unpacked and passed as arguments to the sum function 

    // let and const  provide block scope variables 
    // var provides globally scoped variable 

    // variables declared in a function become local variables in the function  outside the function is global

    // hoisting is a behaviour where variables and functions declarations are moved to the top of scope they contain , this doesnot happen with variables created with let and const and functions created using them 

    // only declarations are moved up no their initialization if accesed before initialization given as undefined 
    

})()
// invoked immediately 




