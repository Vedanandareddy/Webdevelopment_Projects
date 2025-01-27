let iname="vedananda"

let l=iname.length;
// gets the length of the string iname 
// console.log(l);

// usually strings are created using double cotes but single cotes can also be used 

let a='ved"an"anda';
// by using single cotes for string it allows the use of double cotes in the string or can used escape sequence for this 
// console.log(a)

// template literals uses backticks instead of quotes which allows the usage of both single and double quotes in the string 

let myname=`"vedananda" 'reddy' `
// console.log(myname)  

// we can insert variables directly in template literals using ${'variable name'} this is called string interpolation 

let sentence=`My name is ${myname}`

// console.log(sentence);

// by using escape sequence 

// let hname='Michael D'Angelo' 
// if we try to used this js misunderstands it but this can be achieved using escape sequences 

let hname='Michael D\' Angelo'
// console.log(hname)
// other escape sequence charecters are 

let val="Hello \nThis is Vedananda" 
//  here \n is escape sequence for new line 
// console.log(val)

val="Hello \tThis is Vedananda" 
//  here \t is escape sequence for tab 
// console.log(val)

val="Hello \rThis is Vedananda" 
//  here \r is escape sequence for new line 
// console.log(val)


// String properties and methods 
let yname="Vedananda"
console.log(yname.length)
// gives length of the string 

console.log(yname.toUpperCase())
// doesnot change actual string but returns a string with all charecters in  uppercase 

console.log(yname.toLowerCase())
// doesnot change actual string but returns a string with all charecters in  lowercase

console.log(yname.slice(0))
// one parameter then that to end 
console.log(yname.slice(0,3))
// gives string from index 0to3 3 not included 

let newname =yname.replace('a','t');
// replaces the first occurence of the given string to other string 
console.log(newname)

let s="Spider";
let m="Man"

// let sm=s+m; 
// or 
let sm=s.concat(m)
console.log(sm)

let w=" Wolverine   "
console.log(w)
let sw=w.trim()
// removes white spaces  from beginning and end 
console.log(sw)

// individual charecters in a string can be accesed by using index which starts form 0 

console.log(sw[1])


let b = "ShivamSh"

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)

console.log("var\"".length)

let word="Anandreddy"

console.log(word.includes("and"))
// checks if given string is in any part of the word  and return true if it is and false if not 

console.log(word.startsWith("Ana"))
// checks if it starts with 

console.log(word.endsWith("y"))
// checks if its ends with 





