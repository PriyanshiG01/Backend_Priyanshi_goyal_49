const os = require("os");
console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("System Uptime:", os.uptime(), "seconds");
