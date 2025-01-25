// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let strng="Vedananda"
// let chararr=[...strng]
let chararr=strng.split("")
// split splits the  string into characters based on a seperator given 
console.log(chararr);


let result="";
chararr.forEach(e => {
    result=e+result
});
result=strng+result


console.log(result)


