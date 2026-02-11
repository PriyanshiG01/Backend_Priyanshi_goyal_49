const path = require("path");
const filePath = path.join("users", "arjun", "documents", "file.txt");

console.log("Joined Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("Absolute Path:", path.resolve("file.txt"));
