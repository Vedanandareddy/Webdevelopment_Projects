install ejs to use template engine



in actual projects you want to send you files to the server on request using sendfile by specifying root directory  and based on the parameters and queries you would want to send some data to that  but creating a html for each query and handler is not ideal that is why we use ejs template where there is made template and we send some data to be inserted in a certain place based on query or request 

ejs helps  in making templates and sending data to the page and place them in our template 
 we can set a template and insert variables fetched from database into this templat

This assumes a views directory containing an index.ejs page.

In your Express app, res.render('index', {...}) works even though index is not explicitly defined in your JavaScript code because Express automatically looks for an index.ejs file inside the views directory when you call res.render('index').

{siteName,searchText} this automatically creates and object  {siteName:siteName,searchText:searchText} 

template engine ejs uses ejs format instead of html 

https://github.com/mde/ejs/wiki/Using-EJS-with-Express  

it is a way put variable in page using templates 