import mongoose from "mongoose";
import express from "express";
import {Goose} from "./models/goose.js"
// import model from a file 



const app = express()
const port = 3000







// Connect to MongoDB using Mongoose

await mongoose.connect('mongodb://127.0.0.1:27017/Goosedb', {
    connectTimeoutMS: 10000,  // 10 seconds timeout
});
console.log('MongoDB connected');







// CRUD operations in mongoose 



// Create 

// // Create a new document and save it to the database using the module created and imported 
// const goose = new Goose({ name: 'salman' ,age:45,profession:"Plumber"});
// this creates a new document of model specified and can be saved to database using .save()


// alternative  using create 
// const goose = await Goose.create({ name: 'salman', age: 45, profession: "Plumber" });
// console.log('Goose created:', goose);

// await goose.save();
// saves it to database 
// console.log('Goose saved:', goose);




// Read 

// let val= await Goose.find({})
// getting data from the database or sending data to database is an asynchronous operation needs to be awaited for proper execution 
// console.log(val)


// const goose = await Goose.findOne({ name: 'salman' });
// console.log('Found goose:', goose ? goose.name : "No goose found");




// Update 

// await Goose.updateMany({name:"salman"},{$set: {age:25}})




// delete 
const deletedgoose=await Goose.deleteMany({name:"salman"})
console.log("Deleted goose ",deletedgoose)













// server routes 


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

  app.get('/:slug',async (req, res) => {
    // console.log(req.params.slug, typeof req.params.slug)
    res.json(await Goose.findOne({name:req.params.slug}))
    // sending json response 
    // res.send("hello")
  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })






// Close the connection after all operations are done
// await mongoose.connection.close();
// console.log('MongoDB connection closed');
// database connection should be open for lifetime and only closed whe shutting down  