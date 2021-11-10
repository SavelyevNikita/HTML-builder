const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const funcUpdate = async() => {
    await fsPromises.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true });
    await fsPromises.mkdir(path.join(__dirname, 'files-copy'), { recursive: true });
    await fsPromises.readdir(path.join(__dirname, 'files'), { withFileTypes: true }).then(files => {
        files.forEach(el => {
            fsPromises.copyFile(`${path.join(__dirname, 'files', el.name)}`, `${path.join(__dirname, 'files-copy', el.name)}`);
        });
    });
}
funcUpdate();