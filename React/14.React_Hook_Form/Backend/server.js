import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000



// Middleware to parse JSON data in request body
app.use(express.json());


app.use(cors())
// Enable CORS for all origins



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    console.log("recieved data", req.body)
    res.json({message:"Sucess", recieved:req.body})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})