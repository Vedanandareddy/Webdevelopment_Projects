const box1=document.querySelector(".box");
// box1.style.backgroundColor="rgb(37,0,0)"

function rnum(){
    return Math.floor((Math.random()*255));
}

let boxes=document.querySelectorAll(".box");
let c1;
let c2;
let c3;

boxes.forEach((e)=>{
    c1=rnum();
    c2=rnum();
    c3=rnum();
    console.log(c1,c2,c3)
    let color="rgb("+c1+","+c2+","+c3+")";

    e.style.backgroundColor=color;
    console.log(color)
})
