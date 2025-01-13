const e=document.body.firstElementChild
console.log(document.body)
// gives element as a part of dom tree 
console.dir(document.body)
// shows element as an object with its properties 

console.log(e)
// innerhtml 
// console.log(e.innerHTML)
// gives html inside that element as text 
// console.log(e.outerHTML)
// gives itself and inside the element as text 

// these can also be modified

// e.innerHTML="<div class=\"red\"> This is modified using innerhtml property "
// modifying a html element using inner html property and adding class to it 


// simillarly outerHTML can also be modified 
// e.outerHTML="<div class=\"red\"> This is modified using innerhtml property "

console.log(e.textContent);
// gives text present in the element by removing all elements  which includes text node which contains spaces 


hidel.style.backgroundColor="green";
// elements with ids can be targeted directly using their ids

hidel.hidden=false;
// hidden set to false makes the element visible 



// Attribute methods 
hidel.hasAttribute("style") 
// checks if a attribute is present 

hidel.getAttribute("style");
// gets values of an attribute 

// hidel.setAttribute("style" ,"background-color;green;display:flex");
// hidel.setAttribute("class","violet")
// it overwrites it by setting it by the value given 
// set value of an attribute 


// hidel.removeAttribute("style");
// removes a attribute 

console.log(hidel.attributes)

document.designMode="on";
// by doing this we can directly edit in the website 

// data- used for creating custom attributes  available in property named datasets  as key values pairs if data-one attribute is present it is shown and one in dataset 
console.log(hidel.dataset)




// insertion methods 

let div=document.createElement("div");
// creates and element of div 
div.className="redbg"
// setting class name 

div.innerHTML="<div class=\"greenbh\" > inside the created element </div>"
// setting the content inside the created element 
div.style.backgroundColor="yellow"

document.body.append(div)
// there are four different types of  ways to insert in a node 

let bdy=document.body;


// these methods are used for nodes rather than elements 

// bdy.append(div)
// append at the end of the node 

// bdy.prepend(div)
// insert at the beginning of the node 

// bdy.before(div)
// insert before the node 

// bdy.after(div)
// insert after the node 

// bdy.replaceWith(div)
// replaces the node with given node 

// other methods used to insert html,text,elements  which contain two parameters one is where to insert and other is what to insert 
// first ones -: types in them are 
// before begin -: means before the beginning of the element 
// after begin -: after the beginning of the element 
// before end -: before the end of the element 
// after end -: after the end of the element 


let cont=document.body.querySelector(".container")


// cont.insertAdjacentHTML("beforeend","<p> This is a paragraph </p>")
// insert html 

cont.insertAdjacentHTML("afterend","<p> This is a end paragraph </p>")

cont.insertAdjacentText("afterbegin","Hey this is a div ")
// inserts text after the beginnig of the element inside the element 

// Node removal 
let box=document.body.querySelector(".box")
// box.remove()
// removes a given element or node 

console.log(box.classList)
// contains the list of classes present in the element 

// if we assign something to the classname it overwrites the existing classes 
// often we want to add or remove classes which can be done by using classList 

// adds a given class 
box.classList.add("violetbrdr")
console.log(box.classList)


// removes a given class 
box.classList.remove("violetbrdr")
console.log(box.classList);

console.log(box.classList.contains("red"))
// checks if the element contains a given class 

// box.classList.toggle("red")
// toggle adds class if not present and removes if already present 


