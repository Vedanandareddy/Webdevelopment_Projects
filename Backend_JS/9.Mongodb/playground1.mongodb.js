

// Select the database to use.
use('SigmaPlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
    {
      "name": "Python",
      "Price": 8500,
      "Author": "Arjun Patel"
    },
    {
      "name": "JavaScript",
      "Price": 9200,
      "Author": "Priya Sharma"
    },
    {
      "name": "C++",
      "Price": 7800,
      "Author": "Ravi Kumar"
    },
    {
      "name": "React",
      "Price": 10500,
      "Author": "Anika Singh"
    },
    {
      "name": "Node.js",
      "Price": 11000,
      "Author": "Vikram Mehta"
    },
    {
      "name": "Data Science",
      "Price": 15000,
      "Author": "Neha Gupta"
    },
    {
      "name": "Machine Learning",
      "Price": 13500,
      "Author": "Rajesh Khanna"
    },
    {
      "name": "Docker",
      "Price": 9500,
      "Author": "Sneha Reddy"
    },
    {
      "name": "Kubernetes",
      "Price": 11500,
      "Author": "Amit Joshi"
    },
    {
      "name": "AWS",
      "Price": 12500,
      "Author": "Kavita Verma"
    }
  ]);

// Run a find command to view items sold on April 4th, 2014.
const courses = db.getCollection('Courses').find().count();

// Print a message to the output window.
console.log(`${courses} `);

