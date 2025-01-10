let arr=[1,2,3];

let n=prompt("enter no of elements you want add to the array");

let i=0;
let val;
while(i<n){
    val=parseInt( prompt("Enter the number you want to add to the array"));
    arr.push(val);
    i++;
}

console.log(arr)
