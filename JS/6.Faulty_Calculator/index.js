// a faulty calculator performs wrong operations 10% of the times 


let a= parseInt(prompt("Enter your first number"))
let b=parseInt(prompt("Enter your second number"));
let c=prompt("Enter your operand");

const obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*"
};

let random=Math.random();

if(random<=0.1){
    c=obj[c];
}


if(c=="+"){
    // console.log(a+b);
    alert(a+b);
}
else if(c=="-"){
    console.log(a-b);
    alert(a-b);
}
else if(c=="*"){
    console.log(a*b)
    alert(a*b);
}
else if(c=="/"){
    console.log(a/b)
    alert(a/b)
}
else{
    console.log("enter proper operand ");
    alert("Enter a proper operand")
}
