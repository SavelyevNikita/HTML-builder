const fs = require('fs');
const path = require('path');
// const initPath = path.join(__dirname, 'files');
// const finalPath = path.join(__dirname, 'files-copy');
fs.readdir(path.join(__dirname), { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(el => {
        if (el.name === 'files-copy') {
            // console.log(el.name);
            fs.rm(`${path.join(__dirname, 'files-copy')}`, { recursive: true }, () => {
                // console.log(el.name);
            });
        }
    });
});
fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
});
fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true }, (err, files) => {
    if (err) { console.log('error'); }
    files.forEach(el => {
        fs.copyFile(`${path.join(__dirname, 'files', el.name)}`, `${path.join(__dirname, 'files-copy', el.name)}`, (err) => {
            if (err) {
                console.log("Error Found:", err);
            }
        });
    });
});