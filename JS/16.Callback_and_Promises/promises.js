// for managing asynchronous actions we use callbacks but for large amount of actions it becomes extremely complicated for managing this also called as callback hell or pyramid of doom 

// promises are better way to manage these asynchronous tasks 

console.log('This is Promises');


// when promise is created it is either resolved or rejected  created using promise constructor 
// which takes function with arguments resolve and reject 

let Delivery=new Promise((resolve,reject)=>{
    // here resolve and reject are callback functions 
    let rnd=Math.random();

    if(rnd>0.5){
        resolve("The delivery is delivered ")
        // if resolved the resolve function is called and a value is given to it 
    }
    else{
        reject("Not Delivered")
        // if rejected the reject function is called and error  is given to it 
    }
})

// the promise object has two values state and result 

// state is initially pending and later its resolved or rejected 

// result initially undefined later resolved or rejected  



// final result of a promise can be received using then and catch 
Delivery.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('All promises settled ');
    
})


const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      let sc = document.createElement("script"); // Create a new <script> element
      sc.src = src; // Set the source of the script
      sc.onload = () => resolve(`Script loaded successfully: ${src}`); // Resolve on success
      sc.onerror = () => reject(`Error loading script: ${src}`); // Reject on error
      document.head.append(sc); // Append the script to the <head>
    });
  };
  
  // Usage Example
//   loadScript("https://code.jquery.com/jquery-3.6.0.min.js")
//     .then((message) => {
//       console.log(message); // Script loaded successfully
//       console.log("Now you can use jQuery:", typeof jQuery !== "undefined");
//     })
//     .catch((error) => {
//       console.error(error); // Handle the error
//     });
  


loadScript("https://code.jquery.com/jquery-3.6.0.min.js").then((value)=>{
    console.log("The script loaded Succesfully "+value)
}).catch((error)=>{
    console.log(error);
})


let walk=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("You have walked the Dog")
    }, 5000);
})

let clean=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("You have cleaned the room")
    }, 4000);
})

let trash=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("You have taken the trash out")
    }, 3000);
})


walk.then((value)=>{console.log(value); return clean;})
      .then((value)=>{console.log(value);return trash;})
      .then((value )=>{console.log(value);console.log('You have finished all the chores');})

// here all walk,clean,trash are promise objects for making them as functions they can be written as 


let walkDog=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("You have walked the Dog")
        }, 5000);
    })
}

// then it is run as 
walkDog().then((value)=>{console.log(value);
})







