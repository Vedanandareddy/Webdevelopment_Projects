// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function sortstudents(arr){
    arr.forEach(element => {
        l=element.length
        if(l<6){
            Gryffindor.push(element)
        }
        else if(l<8){
            Hufflepuff.push(element)
        }
        else if(l<12){
            Ravenclaw.push(element)
        }
        else{
            Slytherin.push(element)
        }
        
    });
    return
}


let students=["Ram","Bheem","Harry","Hermione","Draco Malfoy","Peter Petegrew","Voldemort","shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"
]

let Gryffindor=[];
let Hufflepuff=[];
let Ravenclaw=[];
let Slytherin=[];

sortstudents(students)

console.log(Gryffindor,Hufflepuff,Ravenclaw,Slytherin);

