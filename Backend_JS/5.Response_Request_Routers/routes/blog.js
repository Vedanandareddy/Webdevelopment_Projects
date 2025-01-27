const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
  res.send('blogs home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})


// define the about route
router.get('/blogposts/:slug', (req, res) => {
    res.send(`Fetch the blog posts about ${req.params.slug}`)
  })

module.exports = router