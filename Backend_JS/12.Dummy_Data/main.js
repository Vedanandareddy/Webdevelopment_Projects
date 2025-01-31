import express from "express"
import mongoose from "mongoose"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { boolean } from "webidl-conversions";



// Arrays with random data
const randomNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
const randomProgrammingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
const randomSalaryAmounts = [50000, 75000, 120000, 90000, 200000];
const randomCities = ["New York", "Tokyo", "Berlin", "Sydney", "Rio de Janeiro"];
const manager=[true,false]



const app = express()
const port = 3000

// Middleware to parse JSON data
app.use(express.json());
// The express.json() middleware is used to parse incoming requests with a Content-Type of application/json




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




let conn= await mongoose.connect('mongodb://127.0.0.1:27017/Company');
// connnected to database 
const Employee = mongoose.model('Employee', { name: String,salary:Number,language:String,city:String,isManager: Boolean });


// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }



console.log(__dirname)

app.get('/', (req, res) => {
   console.log("Hello")
    res.sendFile( 'main.html',{root: __dirname})
  })




// Route to handle POST requests
app.post('/',  async (req, res) => {

     await Employee.deleteMany({});
    // inserting dummy data to employee collection using mongoose 
    for (let i = 0; i <10; i++) {
        let n=Math.floor( Math.random()*5)
        let s=Math.floor( Math.random()*5)
        let l=Math.floor( Math.random()*5)
        let c=Math.floor( Math.random()*5)
        let b=Math.floor(Math.random()*2)
        let data = await Employee.create({ name: `${randomNames[n]}`, salary: `${randomSalaryAmounts[s]}`, language: `${randomProgrammingLanguages[l]}`,city:`${randomCities[c]}` ,isManager:manager[b]})
        //await data.save()
        // save() not necessary as create() creates and saves the data in db
        
    }








    const { name, email } = req.body; // Access the data from the request body
  
    console.log('Received data:', { name, email });
  
    // Send a response back to the client
    res.json({
      message: 'Data received successfully!',
      data: { name, email }
    });
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
