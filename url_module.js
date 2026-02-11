const { URL } = require("url");
const myUrl = new URL("https://example.com:8080/about?name=Arjun&age=21");

console.log("Full URL:", myUrl.href);
console.log("Protocol:", myUrl.protocol);
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Query Parameter (name):", myUrl.searchParams.get("name"));
console.log("Query Parameter (age):", myUrl.searchParams.get("age"));
