const box=document.querySelector(".box")


async function waitfor(n){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (n);
        }, n);
    })
}

// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

function dots(x){
    // if(x==0){
    //     return "    "
    // }
    // else if (x==1){
    //     return " .   "
    // }
    // else if (x==2){
    //     return " .  .   "
    // }
    // else if (x==3){
    //     return " .  .  .  "
    // }
    return " . ".repeat(x%4);
    // repeat returns a string made from count copies appended together 
}


async function main(){

    let time;
    let value;
    let intid;
    time=1+Math.floor(Math.random()*7);
    console.log(time)
    // box.innerHTML="Initializing Hacking"+ dots(3)
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            box.innerHTML="Initializing Hacking"+ dots(i);
        }
    }, 1200);
    value=await waitfor(time*1000)
    // by using await it waits for the function to settle  the promise before executing other code 
    clearInterval(intid)




    // box.innerHTML="Reading your Files..."
    time=1+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            box.innerHTML="Reading your Files"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)





    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            box.innerHTML="Password files Detected"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)



    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            box.innerHTML="Sending all passwords and personal files to server"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)



    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    lintid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            box.innerHTML="Cleaning up"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(lintid)
    
    box.innerHTML="Your Computer is Hacked"
    console.log("Completed")

}


main()


