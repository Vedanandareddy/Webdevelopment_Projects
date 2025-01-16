const box1 = document.querySelector(".box");
// box1.style.backgroundColor="rgb(37,0,0)"

function rcolor() {
    let c1 = Math.floor((Math.random() * 255));
    let c2 = Math.floor((Math.random() * 255));
    let c3 = Math.floor((Math.random() * 255));
    return "rgb(" + c1 + "," + c2 + "," + c3 + ")"

}

let boxes = document.querySelectorAll(".box");

boxes.forEach((e) => {
    let color = rcolor();
    e.style.backgroundColor = color;
    console.log(color)
})
