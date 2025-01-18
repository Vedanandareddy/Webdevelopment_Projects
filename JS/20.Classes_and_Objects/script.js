let obj={
    a:6,
    b:9
}

// in javascript objects have a special property called prototype 
// it is either null or refers to another object 
// it is a type of inheritance 
// if a we try to read a property from an object and its not present it checks for it in its prototype and simillar for methods 

// prototype can be set using __proto__

let obj1={
    c:56,
    d:8
}

obj.__proto__=obj1;

console.log(obj.c);
// property not found gets from prototype here it is set to obj1 
