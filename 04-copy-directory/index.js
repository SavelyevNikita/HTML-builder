const fs = require('fs');
const path = require('path');
const myPath = path.join(__dirname, 'files');
// console.log(myPath);
fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
});

fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
    if (err) { console.log('error'); }
    files.forEach(el => {
        fs.copyFile(path.join(__dirname, 'files', el.name, path.join(__dirname, 'files-copy', el.name)), (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        });
        // console.log(path.join(__dirname, 'files', el.name));
        // console.log(path.join(__dirname, 'files-copy', el.name));
    });
});