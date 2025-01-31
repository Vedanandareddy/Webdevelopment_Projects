// uses specified database if exists or creates new database 
use("CRUDdb")

// console.log(db)
// current db set to CRUDdb 




// Create operations 

// creates a collection of specifies name if not exits 
db.createCollection("Courses")


// inserts a single json into db in specified collection
// db.Courses.insertOne({
//     name:"Full Stack Developer Course",
//     price:10000,
//     Instructor:"Parthasarathi"
// })



// inserts multiple data documenst using insertMany 
// db.Courses.insertMany(
//     [
//         {
//             "name": "Python Programming Masterclass",
//             "price": 12000,
//             "instructor": "John Doe"
//         },
//         {
//             "name": "Data Science Bootcamp",
//             "price": 15000,
//             "instructor": "Jane Smith"
//         },
//         {
//             "name": "Machine Learning with TensorFlow",
//             "price": 18000,
//             "instructor": "Alex Johnson"
//         },
//         {
//             "name": "Web Development with React",
//             "price": 10000,
//             "instructor": "Emily Davis"
//         },
//         {
//             "name": "Android App Development",
//             "price": 14000,
//             "instructor": "Michael Brown"
//         },
//         {
//             "name": "iOS App Development with Swift",
//             "price": 16000,
//             "instructor": "Sarah Wilson"
//         },
//         {
//             "name": "Cloud Computing with AWS",
//             "price": 20000,
//             "instructor": "David Martinez"
//         },
//         {
//             "name": "Cybersecurity Fundamentals",
//             "price": 13000,
//             "instructor": "Laura Garcia"
//         },
//         {
//             "name": "DevOps Engineering",
//             "price": 17000,
//             "instructor": "James Anderson"
//         },
//         {
//             "name": "Blockchain Development",
//             "price": 19000,
//             "instructor": "Patricia Lee"
//         }
//     ]
// )


// Read operations 

// syntax of find 
// db.collection.find(query, projection)


// Find all documents in the Courses collection
let doc=db.Courses.find()
// returns a cursor 


console.log(doc.count())
// count of number of selected data documents 

// query 
// db.Courses.find({price:15000})

// for a single data doc 
// db.Courses.findOne({ instructor: "Alex Johnson" })




// MongoDB supports operators to refine queries:




// Comparison Operators:

// $eq: Equal to.

// $ne: Not equal to.

// $gt, $gte: Greater than (or equal).

// $lt, $lte: Less than (or equal).



// Courses priced over 10000:
db.Courses.find({price:{$gte: 10000}})
// gets all data docs which has price greater than or equal to 10000





// Logical Operators:

// $and, $or: Combine conditions.

// $in, $nin: Match values in an array.



// db.users.find({ $and: [{ age: { $gte: 25 } }, { age: { $lte: 30 } }] })

// course with price greater than 10000 and lessthan 20000
db.Courses.find({ $and:[{price:{$gt:10000}},{price:{$lte:15000}}]})




db.Courses.find({ price: { $in: [10000, 15000] } })
// check if it is present in given values or not in given values 



// Method	Purpose
// updateOne()	Updates the first document that matches the query.
// updateMany()	Updates all documents that match the query.
// replaceOne()	Replaces the entire document that matches the query.
// Operator	Purpose
// $set	Sets the value of a field.
// $unset	Removes a field from a document.
// $inc	Increments the value of a numeric field.
// $push	Adds an element to an array.
// $pull	Removes an element from an array.
// $addToSet	Adds an element to an array if it doesn't exist.
// $rename	Renames a field.
// $mul	Multiplies the value of a numeric field.

// db.Courses.updateMany(
//     {price:{
//         $lte:15000
//     }},
//     {$set:{
//         affordable:"yes"
//     }}
// )


// db.Courses.updateMany(
//     {price:{
//         $gt:15000
//     }},
//     {$set:{
//         affordable:"false"
//     }}
// )

// create new data variable in the document 


db.Courses.updateMany(
    {affordable:"yes"},
    {$unset:{
        affordable:""
    }}
)

// removes specified field for given constraint 







// Delete operations 


// delete a single document that matches the query 
// db.Courses.deleteOne({
//     instructor:"John Doe"
// }) 


db.Courses.deleteMany(
    {affordable:"false"})



