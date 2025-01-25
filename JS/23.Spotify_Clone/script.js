async function getsongs() {
    let page = document.createElement("html")
    let value = await fetch("http://127.0.0.1:3000/JS/23.Spotify_Clone/songs/");
    let inntxt = await value.text()
    page.innerHTML = inntxt;
    let songs = []
    let as = page.querySelectorAll("a")
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    // console.log(songs)
    return songs;

}

let currentsong = new Audio()




function formatTime(seconds) {
    // Calculate minutes and seconds
    const minutes = Math.floor(seconds / 60); // Get whole minutes
    const remainingSeconds = Math.floor(seconds % 60); // Get remaining seconds

    // Pad minutes and seconds with leading zeros if necessary
    const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure 2 digits
    const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // Ensure 2 digits

    // Return the formatted time as MM:SS
    return `${formattedMinutes}:${formattedSeconds}`;
}


// const playsong=(songname)=>{
//     let play=document.querySelector(".playsong")
//      play.children[0].src="img/pause.svg"
//     // set image for playing 

//     let songinfo=document.querySelector(".songinfo")
//     songinfo.textContent=songname;
//     // set songname in playbar 

//     // document.querySelectorAll(".time")[1].textContent=currentsong.duration
//     // console.log(document.querySelectorAll(".time"))
//     // currentsong=new Audio("/JS/23.Spotify_Clone/songs/"+songname)
//     // creating new object overwrites the variable a plays multiple songs 
//     // console.log(song)

//     currentsong.src="/JS/23.Spotify_Clone/songs/"+songname


//     currentsong.play()
//     console.log(Math.floor(currentsong.duration))
// }


const playsong = (songname, pause = false) => {

    if (currentsong) {
        currentsong.pause()
    }

    let play = document.querySelector(".playsong");
    play.children[0].src = "img/pause.svg";
    // set image for playing 

    let songinfo = document.querySelector(".songinfo");
    songinfo.textContent = songname;
    // set songname in playbar 

    currentsong.src = "/JS/23.Spotify_Clone/songs/" + songname;

    // Wait for the metadata to be loaded before accessing the duration
    currentsong.addEventListener('loadedmetadata', () => {
        document.querySelectorAll(".time")[1].textContent = formatTime(currentsong.duration)
        // console.log(Math.floor(currentsong.duration));
        // Now you can safely use currentsong.duration
    });

    if (pause == true) {
        currentsong.pause()
        play.children[0].src = "img/playsong.svg";
    }
    else {
        currentsong.play();
    }
}





async function main() {
    // get all the songs in the folder 
    let songs = await getsongs();
    let fsong;

    fsong = songs[0].split("songs/")[1].replaceAll("%20", " ")
    playsong(fsong, true)


    // using audio element to control it 
    // audio = new Audio(songs[1]);
    // audio.addEventListener("loadeddata", () => {
    // fires when data is loaded 
    // let duration = audio.duration;
    // console.log(duration)
    // The duration variable now holds the duration (in seconds) of the audio clip
    // console.log(audio.currentTime);
    // current time holds the current run time of the audio 
    // });
    // audio.play()
    // used to play the audio in the audio object 




    // shows all the songs in the playlist 
    let sname;
    let sauthor;
    let div;
    let songcards = document.querySelector(".songcards")
    for (const song of songs) {
        div = document.createElement("div")
        div.className = "songcard"
        s = song.split("songs/")[1].replaceAll("%20", " ")
        sname = s
        sauthor = "Vedananda"
        div.innerHTML = `                   
                     <img class="invert musiclogo" src="img/music.svg" alt="">
                    <div class="sinfo">
                        <div class="sname">${sname}</div>
                        <div class="screator">${sauthor}</div>
                    </div>
                    <div class="splay">
                        <span class="plnow">Play now</span>
                        <img class="invert splbtn" src="img/splay.svg" alt="">
                    </div>
                    `
        songcards.append(div)
    }


    // adding addEventListener so the song plays on a click
    let e = document.querySelectorAll(".songcard")
    Array.from(e).forEach(element => {
        // console.log(element.querySelector(".sname").textContent)
        let sname = element.querySelector(".sname").textContent
        element.addEventListener("click", () => {
            // console.log(sname)
            playsong(sname)
        })
    });


    // pause currentsong
    let play = document.querySelector(".playsong")
    // console.log(play)
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.children[0].src = "img/pause.svg"
        }
        else {
            currentsong.pause()
            play.children[0].src = "img/playsong.svg"

        }
    })

    // addEventListener for timeupdate when song is playing
    // this is fired whenever the currentTime of the audio is get updated 
    currentsong.addEventListener("timeupdate", () => {
        let ctime = currentsong.currentTime;
        let duration = currentsong.duration;
        if(ctime==duration){
            play.children[0].src = "img/playsong.svg"
        }
        document.querySelectorAll(".time")[0].textContent = formatTime(currentsong.currentTime)
        let circle = document.querySelector(".circle")
        circle.style.opacity = 1
        circle.style.left = ((ctime / duration) * 100) + "%"


    })


    // addEventListener for seekbar to seek the song 
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let twidth = e.target.getBoundingClientRect().width;
        // gets postion and width of the target element 
        // console.log(e.offsetX)
        let percent = (e.offsetX / twidth) * 100;
        document.querySelector(".circle").style.left = percent + "%"

        let duration = currentsong.duration;
        // console.log(percent)
        currentsong.currentTime = (duration * (percent) / 100);

    })

    document.querySelector(".circle").addEventListener("click", (e) => {
        e.stopPropagation();
    })


    // for opening the library by clicking on spotify logo in small devices 
    document.querySelector(".logo").addEventListener("click", () => {
        let left = document.querySelector(".left")
        // Get the computed style of the element which is read only 
        const computedStyle = window.getComputedStyle(left);
        // Check the position property
        if (computedStyle.position === 'absolute') {
            // console.log(computedStyle.left)
            // check for left position using computedstyle 
            if (computedStyle.left == "0px") {
                left.style.left = "-" + 100 + "%"
            }
            else {
                left.style.left = 0;
                // js always sets inline styles to the elements 
            }
        }
    }
    )

    document.querySelector(".close").addEventListener("click", () => {
        let left = document.querySelector(".left");
                // Get the computed style of the element which is read only 
                const computedStyle = window.getComputedStyle(left);
                // Check the position property
                if (computedStyle.position === 'absolute') {
                     left.style.left = "-" + 100 + "%"
                }
       
    })


    // event listeners for next and previous buttons 


    let previous=document.querySelector(".prevsong")
    previous.addEventListener("click",()=>{
        currentsong.pause()
        let index=songs.indexOf(currentsong.src);
        let sname
        if(index==0){
            sname=songs[songs.length-1].split("songs/")[1].replaceAll("%20", " ")
            playsong(sname)
        }
        else{
            sname=songs[index-1].split("songs/")[1].replaceAll("%20", " ")
            playsong(sname)
        }
         
    })


    let next=document.querySelector(".nextsong")
    next.addEventListener("click",()=>{
        currentsong.pause()
        let index=songs.indexOf(currentsong.src);
        let sname
        if(index==songs.length-1){
            sname=songs[0].split("songs/")[1].replaceAll("%20", " ")
            playsong(sname)
        }
        else{
            sname=songs[index+1].split("songs/")[1].replaceAll("%20", " ")
            playsong(sname)
        }
         
    })


    // adding event listener for volume button 
    let vol=document.querySelector(".volumecontrol")
    // console.log(vol.value)
    vol.addEventListener("change",()=>{
        // console.log("volume changed ")
        currentsong.volume=vol.value/100;
        
    })
}

main()
