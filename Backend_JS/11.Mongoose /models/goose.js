import mongoose from "mongoose";


// Define a Mongoose schema and model
const gooseSchema = new mongoose.Schema({
    name: { type: String, required: true }, // 'name' is required
    age: { type: Number, required: true },  // 'age' is required
    profession: { type: String, required: true } // 'profession' is required
});
// should specify required to throw error when schema is not followed 

// this makes it  easy to maintain and validate 


// create model of defined schema and export 
export const Goose = mongoose.model('Goose', gooseSchema);