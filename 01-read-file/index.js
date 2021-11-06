let fs = require('fs');
let filename = require('path');
let readStream = fs.createReadStream(filename.join(__dirname, 'text.txt'), { encoding: "utf-8" });
readStream.on('readable', function() {
    let data = readStream.read();
    if (data !== null) console.log(data);

});