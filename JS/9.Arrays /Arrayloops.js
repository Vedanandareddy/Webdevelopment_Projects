function square(val,indx,arr){
    console.log( val**2,indx,arr);

}


const a=[1,2,3,4,5,6]

// for each , calls a function once for each element takes the function as input  and gives three parameters to it value ,index ,array 

// a.forEach(square);

// function created inside for each 
// a.forEach((value,indx,arr)=>{
//     console.log(value,indx)
//     console.log(arr)
// })

// for (const e of a) {
//     console.log(e)
// }
// for of loop used to iterate through the array 

const obj={
    a:1,
    b:2,
    c:3
}

for (const e in obj) {
    // below states that only apply this for objects own properties and not for inherited ones 
    if (Object.prototype.hasOwnProperty.call(obj, e)) {
        const element = obj[e];
        console.log(element);
        
    }
}

// for in used to iterate throung keys of the object