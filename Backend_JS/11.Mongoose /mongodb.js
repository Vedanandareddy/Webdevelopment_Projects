const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'MyProject';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');


    // all mongodb shell commands and functions can be used in this for fetching deleting and updating 


    //  Insert a Document
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);

    // find documents
    // const findResult=await collection.find({}).toArray()
    // const findResult=await collection.find({a:3}).toArray()
    // console.log(findResult)

    // update a document 
    // const updateResult=await collection.updateMany({a:3},{$set:{b:4}})
    // console.log(updateResult)


    // delete a document 
    // const deleteResult=await collection.deleteMany({a:2})
    // console.log(deleteResult)




    return 'done.';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());