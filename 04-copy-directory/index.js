const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
// fs.readdir(path.join(__dirname), { withFileTypes: true }, (err, files) => {
// if (err) throw err;
// files.forEach(el => {
//     // console.log(el);
//     if (el.name === 'files-copy') {
const funcUpdate = async() => {
        await fsPromises.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true });
        //     }
        // });
        await fsPromises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
    }
    // });
    // fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    //     if (err) throw err;
    // });
const createFile = async() => {
    await funcUpdate();
    const files = await fsPromises.readdir(path.join(__dirname, 'files'), { withFileTypes: true });
    files.forEach(el => {
        fsPromises.copyFile(`${path.join(__dirname, 'files', el.name)}`, `${path.join(__dirname, 'files-copy', el.name)}`);
    })
};
createFile();