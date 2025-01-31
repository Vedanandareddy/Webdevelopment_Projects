use ("CRUDdb") ;

db.createCollection("users")

// db.users.insertMany(
//     [
//         {
//           "name": "Alice",
//           "age": 25,
//           "email": "alice@example.com",
//           "country": "USA",
//           "bio": "Software developer with 5 years of experience.",
//           "location": { "type": "Point", "coordinates": [ -73.97, 40.77 ] }
//         },
//         {
//           "name": "Bob",
//           "age": 30,
//           "email": "bob@example.com",
//           "country": "Canada",
//           "bio": "Full stack developer specializing in JavaScript.",
//           "location": { "type": "Point", "coordinates": [ -79.38, 43.65 ] }
//         },
//         {
//           "name": "Charlie",
//           "age": 22,
//           "email": "charlie@example.com",
//           "country": "UK",
//           "bio": "Junior developer learning MongoDB.",
//           "location": { "type": "Point", "coordinates": [ -0.12, 51.50 ] }
//         },
//         {
//           "name": "David",
//           "age": 35,
//           "email": "david@example.com",
//           "country": "Australia",
//           "bio": "DevOps engineer with a passion for automation.",
//           "location": { "type": "Point", "coordinates": [ 151.20, -33.86 ] }
//         },
//         {
//           "name": "Eva",
//           "age": 28,
//           "email": "eva@example.com",
//           "country": "Germany",
//           "bio": "Frontend developer specializing in React.",
//           "location": { "type": "Point", "coordinates": [ 13.40, 52.52 ] }
//         },
//         {
//           "name": "Frank",
//           "age": 40,
//           "email": "frank@example.com",
//           "country": "USA",
//           "bio": "Senior backend developer with expertise in Node.js.",
//           "location": { "type": "Point", "coordinates": [ -122.42, 37.77 ] }
//         },
//         {
//           "name": "Grace",
//           "age": 27,
//           "email": "grace@example.com",
//           "country": "Canada",
//           "bio": "Mobile app developer working with Flutter.",
//           "location": { "type": "Point", "coordinates": [ -114.07, 51.05 ] }
//         },
//         {
//           "name": "Hank",
//           "age": 33,
//           "email": "hank@example.com",
//           "country": "USA",
//           "bio": "Data scientist with a focus on machine learning.",
//           "location": { "type": "Point", "coordinates": [ -87.62, 41.88 ] }
//         },
//         {
//           "name": "Ivy",
//           "age": 29,
//           "email": "ivy@example.com",
//           "country": "UK",
//           "bio": "UI/UX designer with a passion for user-centered design.",
//           "location": { "type": "Point", "coordinates": [ -0.08, 51.51 ] }
//         },
//         {
//           "name": "Jack",
//           "age": 31,
//           "email": "jack@example.com",
//           "country": "Australia",
//           "bio": "Cloud engineer specializing in AWS.",
//           "location": { "type": "Point", "coordinates": [ 153.03, -27.47 ] }
//         },
//         {
//           "name": "Karen",
//           "age": 26,
//           "email": "karen@example.com",
//           "country": "Germany",
//           "bio": "Backend developer working with Python and Django.",
//           "location": { "type": "Point", "coordinates": [ 9.99, 53.55 ] }
//         },
//         {
//           "name": "Leo",
//           "age": 34,
//           "email": "leo@example.com",
//           "country": "USA",
//           "bio": "Full stack developer with expertise in Java and Spring Boot.",
//           "location": { "type": "Point", "coordinates": [ -118.24, 34.05 ] }
//         },
//         {
//           "name": "Mona",
//           "age": 23,
//           "email": "mona@example.com",
//           "country": "Canada",
//           "bio": "Junior developer learning React and Node.js.",
//           "location": { "type": "Point", "coordinates": [ -123.12, 49.28 ] }
//         },
//         {
//           "name": "Nina",
//           "age": 32,
//           "email": "nina@example.com",
//           "country": "UK",
//           "bio": "Data analyst with expertise in SQL and Tableau.",
//           "location": { "type": "Point", "coordinates": [ -1.26, 51.75 ] }
//         },
//         {
//           "name": "Oscar",
//           "age": 36,
//           "email": "oscar@example.com",
//           "country": "Australia",
//           "bio": "Senior software engineer specializing in microservices.",
//           "location": { "type": "Point", "coordinates": [ 149.13, -35.28 ] }
//         },
//         {
//           "name": "Paul",
//           "age": 24,
//           "email": "paul@example.com",
//           "country": "Germany",
//           "bio": "Frontend developer working with Vue.js.",
//           "location": { "type": "Point", "coordinates": [ 10.00, 53.55 ] }
//         },
//         {
//           "name": "Quinn",
//           "age": 37,
//           "email": "quinn@example.com",
//           "country": "USA",
//           "bio": "DevOps engineer with expertise in Docker and Kubernetes.",
//           "location": { "type": "Point", "coordinates": [ -77.04, 38.91 ] }
//         },
//         {
//           "name": "Rachel",
//           "age": 28,
//           "email": "rachel@example.com",
//           "country": "Canada",
//           "bio": "Mobile app developer working with React Native.",
//           "location": { "type": "Point", "coordinates": [ -106.35, 56.13 ] }
//         },
//         {
//           "name": "Sam",
//           "age": 39,
//           "email": "sam@example.com",
//           "country": "UK",
//           "bio": "Backend developer specializing in Ruby on Rails.",
//           "location": { "type": "Point", "coordinates": [ -3.19, 55.95 ] }
//         },
//         {
//           "name": "Tina",
//           "age": 21,
//           "email": "tina@example.com",
//           "country": "Australia",
//           "bio": "Junior developer learning Python and Flask.",
//           "location": { "type": "Point", "coordinates": [ 144.96, -37.81 ] }
//         }
//       ]
// )


db.users.find({ age:25 })


// db.users.findOne({ name: "Alice" })

// db.users.find({age:{$gt:35}})

// db.users.find({$and:[{age:{$gt:25}},{age:{$lt:30}}]})

// db.users.find({country:{$in:["USA","Canada"]}})


// sort 
db.users.find().sort({age:1}).limit(5).skip(10)
// -1 descending 1 ascending 
// limit  limits the number of results 
// skip goes skips ahead given number of results 


// The aggregate() method processes data through stages (e.g., filtering, grouping)

db.users.aggregate([
    {$match: {
      age:{$exists :30}
    }},

    {
        $group: {
          _id: "$country",
          average_age: { $avg: "$age"}}
    }
])
// getting average age of each country 






// Update operations 


// update one modifies first document that macthes the query 
// db.collection.updateOne(<filter>, <update>, <options>)


db.users.updateOne(
    {name:"Alice"}, //filter
    {$set :{email:"alice6512@gmail.com"}}  //update 
)

// db.users.findOne({name:"Alice"})


// update many updates all documents that match the query criteria 

// db.users.updateMany(
//     {country:"USA"},
//     {$inc: {age:2}}
// )

db.users.find(
    {country:"USA"}
)
