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
    let div;
    div=document.createElement("div")
    box.append(div)

    let time;
    let value;
    let intid;
    time=2+Math.floor(Math.random()*7);
    console.log(time)
    // box.innerHTML="Initializing Hacking"+ dots(3)
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            div.innerHTML="Initializing Hacking"+ dots(i);
        }
    }, 1200);
    value=await waitfor(time*1000)
    // by using await it waits for the function to settle  the promise before executing other code 
    clearInterval(intid)

    await waitfor(1000)
    div=document.createElement("div")
    div.innerHTML="Initialized Hacking"
    box.append(div)
    await waitfor(1000)

    div=document.createElement("div")
    box.append(div)




    // box.innerHTML="Reading your Files..."
    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(200);
            div.innerHTML="Reading your Files"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)

    await waitfor(1000)
    div=document.createElement("div")
    div.innerHTML="Files Read"
    box.append(div)
    await waitfor(1000)

    div=document.createElement("div")
    box.append(div)





    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            div.innerHTML="Password files Detected"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)

    await waitfor(1000)
    div=document.createElement("div")
    div.innerHTML="Password Files Copied"
    box.append(div)
    await waitfor(1000)

    div=document.createElement("div")
    box.append(div)



    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    intid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            div.innerHTML="Sending all passwords and personal files to server"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(intid)

    value=await waitfor(time*1000)
    clearInterval(intid)

    await waitfor(1000)
    div=document.createElement("div")
    div.innerHTML="Password Files and Personal Data Sent"
    box.append(div)
    await waitfor(1000)

    div=document.createElement("div")
    box.append(div)



    time=2+Math.floor(Math.random()*7);
    console.log(time);
    
    lintid=setInterval(async () => {
        let i=0
        for(;i<4;i++){
            let val= await waitfor(100);
            div.innerHTML="Cleaning up"+ dots(i);
        }
    }, 1000);

    value=await waitfor(time*1000)
    clearInterval(lintid)

    await waitfor(1000)
    div=document.createElement("div")
    div.innerHTML="Your Computer is Hacked"
    box.append(div)
    await waitfor(1000)


}


main()


