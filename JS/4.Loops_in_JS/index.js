// for loop
// for (st1;st2;st3){}
// st1 is for initialization runs only once 
// st2 is condition on which loop runs and is checked everytime before running 
// st3 is used for variable manipulation runs every time loop runs except the first time 

for(let i=0;i<15;i++){
    console.log(i+"th iteration")
}


let obj={
    "name":"vedananda",
    "job code":867,
    "job descriptio":"web developer"
}


// for in loop used for iterating keys in an Object
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);

}

// for of loop used for iterating values in an iterables like strings and arrays 
for (const char of "vedananda") {
    console.log(char);
}

let j=0;
// while loop 
while(j<15){
    console.log(j);
    j+=1;
}



// do while loop 
let k = 10;
do {
    console.log(k)
    k++;
} while (k<6)



const marks={
    "rohan":86,
    "tarun":56,
    "sohail":64
}



marks.rohan=75;
// assigning and manipulating done by using above convention 

console.log("Marks of students")
for (const key in marks) {
    console.log(marks[key]);
    // accesing is done by above convention 

}

console.log(marks[0])

// for (let index = 0; index < ; index++) {
//     const element = array[index];
    
// }



