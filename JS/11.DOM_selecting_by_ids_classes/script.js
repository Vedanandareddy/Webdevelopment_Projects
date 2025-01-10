console.log("Hello")


let boxes=document.getElementsByClassName("box");
// return array of objects which have class box in them 

console.log(boxes);

boxes[0].style.backgroundColor="red";

boxes[1].style.backgroundColor="blue";
// this adds and inline css to the element 


const redbox=document.getElementById("redbg");
// return element with given id 
redbox.style.backgroundColor="red";
// redbox.style.height="300px";
// targer css of an element using .style and mentioning desired value 

let acont=document.getElementsByClassName("acontainer")[0];

let value=document.querySelector(".cont");
// gets the first element with given CSS selector 

value.style.height="100px";
// changes the css property of element by using style property object 
// as this adds  inline css to the element it is given more priority 

let values=document.querySelectorAll(".cont");
// returns all the elements with given css selector in an array of objects 

values.forEach((e)=>{
    e.style.backgroundColor="blue";
})
// for loop which applies backgroundColor blue on every element with class cont 


// simillarly we have get elements by tag name 

let tags=document.getElementsByName("div")
// gets all elements with div tag 

// we have matches that checks if element matches the css selector 
console.log(value.matches(".cont"))

// closest gets nearest ancestor that matches given css selector 
console.log(value.closest(".acontainer"))

// contains checks if a element contains another element 
console.log(acont.contains(value))

