const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const pathWithStyle = path.join(__dirname, 'styles');
fsPromises.readdir(pathWithStyle).then(files => {
    files.forEach(file => {
        if (path.extname(file) === '.css') console.log(file, path.extname(file));
    })
});
// console.log(pathWithStyle);