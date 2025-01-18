// in javascript there asynchronous and synchronous actions 
// Asynchronous actions are started but completed later as they take time 
// Synchronous actions are started and completed one by one 

// if js sees an asynchronous action it stalls it for later and moves on to next code 
// this may cause problems if an action we want to perform after the completion of the asynchronous action occurs before completion of it 
// to avoid this this action has to wait for completion of the asynchronous action this can be achieved using callback functions 
// it runs after the asynchronous action is complete 


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Harry"); 
    // Use a function to delay the execution
    document.head.append(sc);
    console.log("Script loaded");
}


const dsplmsg=(name)=>{
    console.log(name);
}

const fn=()=>{
    console.log("completed")
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",dsplmsg)
// dsplmsg("Harry")






let timer=(time,callback) => { 
setTimeout(() => {
    console.log("This is executed after "+time+" seconds");
    callback();
}, time*1000);
 }

function displayend(){
    console.log("This is the end ")
}


// timer(4,displayend);


// when we have callback inside callback it becomes difficult to manage 
// this is sometimes called callback hell or pyramid of doom 
