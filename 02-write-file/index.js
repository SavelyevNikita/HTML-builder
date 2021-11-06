const fs = require('fs');
const filename = require('path');
const readline = require('readline');

const writeStream = fs.createWriteStream(filename.join(__dirname, 'newText.txt'), { encoding: "utf-8" });
let enterText = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
console.log('Введите текст');

enterText.on('line', (line) => {
    writeStream.write(`${line} \n`);
    if (line === "exit") {
        // console.log(`exit:${line}`);
        enterText.close();
    }
})