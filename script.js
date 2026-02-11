const fs = require("fs");

const fd = fs.openSync("secfc.txt", "w+");

fs.writeSync(fd, "hello \n hi");

const buffer = Buffer.alloc(50);

const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);

console.log(buffer.toString("utf-8", 0, bytesRead));

fs.closeSync(fd);

fs.writeFileSync("dummy.txt", "hi bro ");
console.log(fs.readFileSync("dummy.txt", "utf-8"));

fs.appendFileSync("dummy.txt", " what's up!");
console.log(fs.readFileSync("dummy.txt", "utf-8"));

fs.cpSync("dummy.txt", "priyu.txt");

fs.unlinkSync("priyu.txt");


