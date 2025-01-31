
const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');
// Tells Express to use EJS as the template engine.

app.get('/', (req, res) => {
    let siteName = "NVidia"
    let searchText = "Blood bath instocks"
    let adjective="Interesting "
    let pageTitle="MySite"
    let i=-1
    // suppose we got these data from db and we want to send to the site we can send them using template mentioning the variable names you want to send 

    res.render('index',{siteName:siteName,searchText:searchText,adjective,pageTitle,i} )   
    // render is used to send a view template 


    //   for sending html we use res.sendfile  


    //   in actual projects you want to send you files to the server on request using sendfile by specifying root directory  and based on the parameters and queries you would want to send some data to that  but creating a html for each query and handler is not ideal that is why we use ejs template where there is made template and we send some data to be inserted in a certain place based on query or request 

    // ejs helps  in making templates and sending data to the page and place them in our template 
    // we can set a template and insert variables fetched from database into this template 
})



app.get('/about', (req, res) => {
    let siteName = "NVidia"
    let searchText = "Blood bath instocks"
    let adjective="Interesting "
    let pageTitle="MySite"
    let i=-1
    res.render('about',{siteName:siteName,searchText:searchText,adjective,pageTitle,i});
  });

  
  app.get('/profile', (req, res) => {
    const user = { name: 'John Doe', age: 30 };
    res.render('profile', { user });
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})