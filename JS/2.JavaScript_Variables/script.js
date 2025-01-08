// Variable is container that holds data 
 
// in javascript variables can be defined using var,let and const 

// variables can of two types primitive and objects 
// primitive variables are standard type of variables and objects are user made variables made using   primitive datatypes 

var a="Vedananda";
// type of the variables is decided by the variable 

var b=3;


var c=true;

var d=6.7;

console.log(a,b,c,d);
console.log(typeof a,typeof b,typeof c ,typeof d);
// typeof is used to know the type of a variable 

console.log(b+d)

var value=45;
// var is used to define variable and these are function scoped rather than block scoped these variables used in the entire function rather than block which can lead to unexpected behaviour 



let val=7;
// let is a block scoped variable and can be only used in the block they are declared 
{
    let val=76;
    console.log(val)
}
console.log(val)

const isTrue=true

// const variables are declared so that these can't be reassigned again 
// isTrue=false; 
// causes error as const variables can't be reassigned 

// primitive data types are 

let n=4;
// number 
let tag="vedananda";
//  string 
let decision=false;
// boolean 
let m=null;
// null value type of this is object as at the start of creation of javascipt it is written as object and changing this notation may cause problems in various organiztions so this is continued in this way 

let p=undefined;
// no type at time of declaration is specified undefined and can be used later 
console.log(n, tag ,decision,m,p)
console.log(typeof n, typeof tag ,typeof decision,typeof m,typeof p)
p=8;
console.log(typeof n, typeof tag ,typeof decision,typeof m,typeof p)


// objects in javascript are created using primitive data types 

let o={
    "iname":"vedananda",
    "job code" : 567,
    "working" : true
}
// values in objects are comma seperated 
// objects contain key value pairs  and can be accesed and assigned 

o.salary=500000;
console.log(o)

console.log(o["job code"])

 




