let prom1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let val=Math.random()
        if(val>0.1){
            resolve("Completed execution")
        }
        else{
            reject("Error in execution")
        }  
    }, 2000);
})



let prom2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let val=Math.random()
        if(val>0.9){
            resolve("Completed execution  2")
        }
        else{
            reject("Error in execution  ")
        }  
    }, 1000);
})


let prom3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // let val=Math.random()
        let val=1;
        if(val>0.1){
            resolve("Completed execution 3")
        }
        else{
            reject("Error in execution 3")
        }  
    }, 4000);
})


// let result=Promise.all([prom1,prom2,prom3])
// waits for all promises to resolve and returns array of results 

// let result=Promise.allSettled([prom1,prom2,prom3])
// waits for all promises to settle either fulfilled or rejected 

// let result=Promise.race([prom1,prom2,prom3])
// waits for the first promise to settle its result becomes the outcome

let result=Promise.any([prom1,prom2,prom3])
// waits for the first promise to resolve and returns its result 


console.log(result)