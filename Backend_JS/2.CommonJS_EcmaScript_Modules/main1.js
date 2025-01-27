// if type by default set to commonjs if its set to module then it works in ecmascript
// usually require module which is commonjs load synchronously causing blocking 
// whereas ecmascript modules load asynchronously  using imports  



// there are two types of exports named and default export 
// below all are named exports and are imported using their name 
export const a=1
export const b=1
export const c=1
export const d=1

const obj={
    x:1,
    y:5
}

const obj1={
    x:1,
    y:9
}

export default obj;
// this is a default export can be called by any name 
// export default obj1;
// a module cant have multiple default exports 