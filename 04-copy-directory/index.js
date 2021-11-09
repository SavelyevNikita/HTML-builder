const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname), { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(el => {
        // console.log(el);
        if (el.name === 'files-copy') {
            fs.rm(`${path.join(__dirname, 'files-copy')}`, { recursive: true }, () => {});
        }
    });
});
fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
});
fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach(el => {
        fs.copyFile(`${path.join(__dirname, 'files', el.name)}`, `${path.join(__dirname, 'files-copy', el.name)}`, (err) => {
            if (err) throw err;
        });
    });
});