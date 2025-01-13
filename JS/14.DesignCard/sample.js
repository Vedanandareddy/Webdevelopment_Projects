function insertdiv(content){
    let newdiv=document.createElement("div")
    newdiv.classList.add("box");
    newdiv.style.backgroundColor="yellow";
    newdiv.innerHTML=`<p> ${content} </p>`
    let cont=document.querySelector(".container")
    cont.append(newdiv)

}

insertdiv("Hey i am a box");
insertdiv("I am another box");
insertdiv("I am also a box");