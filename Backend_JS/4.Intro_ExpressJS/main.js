

// this is a basic code in express to start a server  on local host
const express = require('express')
const app = express()
// setting an application using app=express() 
const port = 3000
// setting port number to 3000



app.use(express.static('public'))
// used to serve static files in the public directory so that users can acces the files 




// app.get takes a path and handlers which execute when get request to that path is encountered 
// the handler contains req which is request from the user and res which is the response we want to send 
// different request are app.get app.post  app.put or app.delete(path,handler)
// by default get request is done 

app.get('/:slug/:second', (request, res) => {
    // :slug and :second are url parameters can be accesed 
    console.log(request.params)
    // url also contains query which are written after "?" these can be accessed and multiple query parameters written using & as seperator 
    console.log(request.query)
    
  // logic to fetch from db 
  res.send(`Hello World! you are in  ${request.params.slug} and  ${request.params.second}`)
  //   here res is the response sent to the server when this request is submitted 
})

// here :slug is way to define variable and as many variables as you want can be define using this convention 
// these variables can be accesed used request.params.variablename 






// suppose we are creating a blog with multiple pages 

// app.get('/about', (req, res) => {
//     res.send('About me')
//   })


// app.get('/blogs', (req, res) => {
//     res.send('Hello these are my blogs!')
//   })

//   if we have huge website then making this endpoints can be very tedious  so in express we can use variables for creating multiple endpoints and define behaviour





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})