const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let sc = document.createElement("script");
        try {
            sc.src = src;
        } catch (error) {
            console.log(error)
        }
        sc.onload = () => resolve("Script loaded succesfully");
        sc.onerror = () => reject("Error loading script")
        document.head.append(sc);
    }
    )
}


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js").then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

async function main() {
    try {
        let val = await loadScript("https://cnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
        console.log(val)
    } catch (error) {
        console.log(error);
        
    }
}

main();


const newfunc=async ()=>{ return new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error in the code")
        
    }, 3000);
})}

async function whole(){
    try {
        const val=await  newfunc()
        
    } catch (error) {
     console.log(error)   
    }
}

whole()

