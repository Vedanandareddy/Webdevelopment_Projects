// map filter reduce 


function square(e){
    return e**2;
}



const a=[1,2,3,4,5]
// map function 
// creates a new array by performing some operations on each element determined by the function given as parameter to the map funcion which takes a  value,index,array as input and returns a single element as output for the array 
let newarr=a.map(square)
// console.log(newarr)

newarr=a.map((val,indx,array)=>{
    return val*indx;
})
// console.log(newarr)


// filter creates a new array from an array that passes test 

const greaterthan3=(e)=>{
    if(e>3){
        return true;
    }
    return false;
}

let narr=a.filter(greaterthan3)
// gives element that return true for given function 
// console.log(narr)


// reduces array into single element 
let vals=[1,2,3,4,5]
console.log(vals.reduce((a,b)=>{
    return a+b
}))

// return sum after reducing 

//  used create an array from object or iterables
let values=Array.from("vedananda ");
console.log(values)






