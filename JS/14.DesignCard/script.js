function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let newdiv=document.createElement("div")
    newdiv.classList.add("card");
    let nviews;
    if(views>=1000000){
        nviews=Math.floor(views/1000000)+"M "
    }
    else if(views>=1000){
        nviews=Math.floor(views/1000)+"K ";
    }
    else{
        nviews=Math.floor(views);
    }
    newdiv.innerHTML=`
            <div class="thumbnail">
                <img class="thumb" src="Thumbnail.webp" alt="">
                <span class="time">${duration}</span>
            </div>
            <div class="info">
                <div class="title">${title}</div>
                <div class="txt">
                    <p>${cName} . ${nviews}views . ${monthsOld}months ago</p>
                </div>
            </div>`
    let cont=document.querySelector(".container");
    cont.append(newdiv)
    
}



createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 500000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
