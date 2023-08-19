const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', (err, result) => {
    if (err) {
        // throw new Error;
        console.log(err);
        return;
    }
    console.log(result.toString());
})