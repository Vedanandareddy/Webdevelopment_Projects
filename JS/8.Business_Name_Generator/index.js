function randomnumber(){
    let val=Math.random()*3;
    if (val<=1){
        return 1;
    }
    else if(val<=2){
        return 2;
    }
    else{
        return 3;
    }
}


const adjectives={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

const shopName={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

const anotherWord={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}



let Name="";
let first=randomnumber();
Name=Name.concat(adjectives[first]);
let second=randomnumber();
Name=Name.concat(shopName[second]);
let third=randomnumber();
Name=Name.concat(anotherWord[third]);

console.log(Name)


