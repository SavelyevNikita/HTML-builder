const fs = require('fs');
const path = require('path')
const myPath = path.join(__dirname, 'secret-folder');
fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
    if (err) { console.log('error'); }
    files.forEach(el => {
        if (el.isFile()) {
            fs.stat(path.join(__dirname, 'secret-folder', el.name), (err, stats) => {
                console.log(`${el.name.split('.')[0]} - ${path.extname(el.name).split('.')[1]} - ${stats.size/1000}kb`);
            });
        }
    });
});