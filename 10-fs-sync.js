const fs = require(`fs`);

const readFileSync = fs.readFileSync(`./content/subfolder/test.txt`, `utf8`);
console.log(readFileSync);

const writeFileSync = fs.writeFileSync(`./content/subfolder/result-sync.txt`,
   `Here is the result: ${readFileSync}`,
   // { flag: `a` }          //for write again and again
);
console.log(writeFileSync);

// const newFileSync = fs.readFileSync(`./1-intro.js`, `utf8`);
// console.log(newFileSync);