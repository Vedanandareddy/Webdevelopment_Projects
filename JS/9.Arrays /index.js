let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr)

// console.log(typeof arr )
// type of an array is object 

// array is 0indexed and its elements can be accesed 
// console.log(arr[0]);
// console.log(arr[1])
// console.log(arr[2])

// length of an array 
// console.log(arr.length)

// arrays are mutable unlike strings and its values can be changed 

arr[2]=4;
// console.log(arr)


// Array methods 


// tostring 
// console.log(arr.toString())
// console.log(typeof arr.toString())
// converts array into a string of comma seperated values 

// join
// console.log(arr.join(" and "))
// joins all elements using a seperator 


// removes last element from array and returns that element 
// console.log(arr.pop())

// push adds new element at the end of the array and returns the length of array 
// console.log(arr.push(15))
// console.log(arr)

// shift removes first element and returns it 
// console.log(arr.shift())
// console.log(arr)

// unshift adds element form the beginning  and returns new array length
// console.log(arr.unshift(56))

// delete  removes the element from the array ,delete is an operator 
delete arr[5];
// console.log(arr)

// it removes the element from the array and creates and creates an empty space instead of it keeping the length of the array same 

// concat() used join arrays it doesnot change the array but returns a new array 

arr1=[1,2,3,4,5,6,7];
arr2=[8,9,10];
arr3=[11,12,13,14]
newarr=arr1.concat(arr2,arr3)
// console.log(newarr)


values=[5,2,7,1,3,9,11];
values.sort()
// sorts values as strings in alphabeticall order 
// console.log(values)

// fort sorting in numeric order we can write a compare functions which the sort function takes as an argument 

const acompare=(a,b)=>{
    return a-b;
}
// sort functions takes two values and compares them by using this function 
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// for sorting in ascending order 
values.sort(acompare)
// console.log(values)

// console.log(values )
// splice can be used to add ,remove items 
values.splice(2,1,45,34)
// first argument is start index and second is no of elements to remove and additional argument given to it are added at that position specified in start index
// console.log(values)


const numbers=[1,2,3,4,5,6,7]
const sliced=numbers.slice(2,5) 
// first argumet start index and second one is end index which is not included in slicing and if no second argument is given it considered to sliced to end of the array 
// array is not changed the sliced array is returned 
console.log(numbers)
// console.log(sliced)


numbers.reverse()
// array modified such that all the element in it are reversed 
console.log(numbers)


