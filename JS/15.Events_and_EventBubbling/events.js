function rcolor() {
    let c1 = Math.floor((Math.random() * 255));
    let c2 = Math.floor((Math.random() * 255));
    let c3 = Math.floor((Math.random() * 255));
    return "rgb(" + c1 + "," + c2 + "," + c3 + ")"

}

let button=document.querySelector(".btn");

button.addEventListener("click",(e)=>{
    console.log(e,e.target,e.type,e.currentTarget)
    // e is the event which contains details related to it 
    document.querySelector(".box").innerHTML="Button was clicked"
})

// addEventListener function takes two parameters 
// 1.event to listen 
// 2.function to execute if event happened 
// the function takes event as input 

button.addEventListener("dblclick",()=>{
    document.querySelector(".child").style.backgroundColor=rcolor();
})
// changes backgroundColor on doubleclick 

// button.addEventListener("mouseenter",()=>{
//     alert("On the button")
// })
// mouseenter fired when entered a element with EventListener

button.addEventListener("mouseleave",()=>{
    alert("off the button")
})
// mouseleave fired when left a element with EventListener

// keyboard events 
// keyup fired when a key is pressed 
let bdy=document.body;
bdy.addEventListener("keyup",(e)=>{
    console.log("key pressed is "+e.key)
})