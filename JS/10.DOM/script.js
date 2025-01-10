console.log("Hello world ")


// document is the root element that contains head and body 
// it can be accesed by using document and body can be accesed by using document.body 
// it tree like structure and these can be accesed as objects 

// console.log(document.body.parentNode)

// usually nodes contain comment nodes and text nodes which are not neede 
// element can be directly accesed instead of these 

console.log(document.body.firstChild);
// here considers all nodes

console.log(document.body.firstElementChild);
// here considers only element nodes 
// simillar methods for lastchild 

console.log(typeof document)

console.log( typeof window);
// window is used for accesed browser related elements like alert,confirm,prompt 

// document.body.firstElementChild 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children

// these can be accesed using document object 