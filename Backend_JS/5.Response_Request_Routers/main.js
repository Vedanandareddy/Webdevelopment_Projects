// basic code to create a server in express 

const express = require('express')
const blog = require('./routes/blog')
// imports from routes blog 


const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
// handle  /blog routes using blog 





// get request is a default request  but the capabilities of it are limited 
// we can send sensitive information using get request as  it is visible in the url and the data the get request can send is limited so we use other type of requests

// POST - Send data to the server (e.g., for creating new resources).
// PUT - Update an existing resource on the server.
// DELETE - Delete a resource from the server

app.get('/', (req, res) => {
  res.send('Hello World this is a get request first ')
}).post('/', (req, res) => {
  // console.log( req);
  res.send('This is a post request ')
}).put('/', (req, res) => {
  
  res.send('This is a put request')
}).delete('/', (req, res) => {
  res.send('This is a delete request ')
})
// rather than keeping inidividually we can chain request of same element 


app.get('/index', (req, res) => {
  res.sendFile('templates/Mypage.html',{root:__dirname})
  // when file sent as a response root folder of it should be mentioned using this syntax 
})

app.get('/api', (req, res) => {
  res.json({
    name:"vedananda",
    id:345
  })
})
// returns json 

// get request is default request and can be directly made for making other requests we can use html and can request from it 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

