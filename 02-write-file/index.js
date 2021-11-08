const fs = require('fs');
const filename = require('path');
const readline = require('readline');

const writeStream = fs.createWriteStream(filename.join(__dirname, 'newText.txt'), { encoding: "utf-8" });
let enterText = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});
console.log('Введите текст (после ввода нажмите [enter])');
enterText.on('line', (input) => {
    if (input !== "exit") {
        writeStream.write(`${input}\n`);
    } else {
        console.log('процесс ввода завершен');
        enterText.close();
    }
}).on('SIGINT', () => {
    console.log('процесс ввода завершен');
    enterText.close();
})