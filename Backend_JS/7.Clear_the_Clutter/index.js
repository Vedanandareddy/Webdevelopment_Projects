const fs = require('fs');
const path = require('path');

const folderPath = './clutter';
// "./ is current directory "

let files = fs.readdirSync(folderPath);

// console.log(files)

let filetypes = []

files.forEach(element => {
    let array = Array.from(path.extname(element));
    let type = array.slice(1).join("");

    if (!filetypes.includes(type)) {
        console.log(type)
        filetypes.push(type)
    }

});









// creating directories for all files types 


filetypes.forEach(element => {
    const npath = `./clutter/${element}`;

    fs.access(npath, (error) => {

        // To check if the given directory 
        // already exists or not
        if (error) {
            // If current directory does not exist
            // then create it
            fs.mkdir(npath, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("New Directory created successfully !!");
                }
            });
        } else {
            console.log("Given Directory already exists !!");
        }
    });
});



// moving to folders 

files.forEach(element => {
    let array = Array.from(path.extname(element));
    let type = array.slice(1).join("");
    var oldPath = `./clutter/${element}`
    var newPath = `./clutter/${type}/${element}`
    console.log(oldPath, newPath)

    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
    })
});











