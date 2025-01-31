const express = require('express')
const birds = require('./routes/birds')
// path of file to import 
const app = express()
const port = 3000

// before sending the request it stops near the middleware and below request checks if it is present in public folder if it is then it sends the response and ends the request-response cycle
app.use(express.static('public'))




app.use('/birds', birds)
// this is middleware that handles all request with /birds  using birds 


// Middleware 1
app.use((req, res, next) =>{
    console.log(`got a ${req.method}  at this time ${Date.now().toLocaleString()} `)   
    // can be used to log requests 

    req.harry="This is not harry"
    // can used to modify req object 

    // can be used to check 

    // res.send("Hacked by Middleware 1")
    // by sending a response this ends req-res cylce and not letting request get to other middlewares , as the cylce ended next can not be called 
    next()
})
// this is the basic code to for middleware 
// before reaching any handler the request is sent to the middleware and it executes a function  if and if it doesnt end request response cycle it should call next() so it can  reach next middleware  

// Middleware 2
app.use((req, res, next) =>{
    console.log('LOGGED m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// it is called route handler for the /about path.
app.get('/about', (req, res) => {
    res.send('About Me!')
})

app.get('/info', (req, res) => {
    res.send(' Information !')
    // this sends response for request which matched this route
})

// when a request is set  it checks if the request route is present and executes if it matches 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})