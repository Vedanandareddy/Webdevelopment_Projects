
const form={
    name:"vedananda",
    age:20
}


// const newform={...form , name:'Suresh'};  
// const newform={...form , ['name']:'Suresh'};  



// Computed Property Syntax (['name']) :
// Useful when the key is determined dynamically (e.g., based on a variable or expression).

// const key = 'age';
// const newform = { ...form, [key]: 30 }; // Creates { ...form, age: 30 }


// Literal Property Syntax (name) :
// Simpler and more concise when the key is static and known in advance.
// const newform = { ...form, name: 'Suresh' }; // Creates { ...form, name: 'Suresh' }


// If the key is always 'name', both approaches are equivalent. However, if you need dynamic keys, you must use the computed property syntax (['name']).




// console.log(newform)