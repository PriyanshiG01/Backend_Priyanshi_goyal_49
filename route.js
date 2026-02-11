const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Home Page</h1>");
            break;

        case "/home":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>This is Home Route</h1>");
            break;

        case "/login":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Login Page</h1>");
            break;

        case "/data":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                name: "Mohit",
                role: "Intern",
                company: "Tech Company"
            }));
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - Page Not Found</h1>"); 
        }

}).listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});