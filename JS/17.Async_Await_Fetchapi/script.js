async function Myname() {
    console.log('My name is vedananda');
    return "Vedananda"
}
// when a fuction is declared async it wraps its return value into promise 
// by default async functions allways return promise if non promised  is returned it wraps it into a promise and resolves it with that value  
// and async fuctions allow await inside them 

// console.log( Myname());

// console.log("This is the end")

// the await keyword only works inside async functions 
// await keyword makes the js wait for the promise to settle and returns result 

// async function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data fetched")
//             resolve(455)
//         }, 3000);
//     })
// }


async function fetchdata(url) {

    let response = await fetch(url)
    // fetch is a non blocking async function , it returns a promise but promise is not resolved if executed without awaiting it returns an unresolved promise at first if not awaited 
    let json =  await response.json();
    // .json() is a method to parse json  data from the http response 
    return json;

}

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    // post request to a site using fetch api 

    let data = await x.json();
    return data;
}


async function main() {
    console.log("Getting Data");
    let data = await fetchdata('https://jsonplaceholder.typicode.com/todos/1');
    // fetching data from given url
    console.log(data)
    console.log('Data processing ');
    console.log('Data processed');
}

// await works only in async functions 

main()


