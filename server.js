// import http module
const http = require('http');

// create an http server
const app = http.createServer((req, res) => {

    // check which route the user is requesting
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // send the home page response
        res.end('<h1>Home Page</h1>');
    }

    // about route
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // send about page response
        res.end('<h1>About Page</h1>');
    }

    // contact route
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // send contact page response
        res.end('<h1>Contact Page</h1>');
    }

    // if the route does not exist
    else {
        // send 404 error
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// define port number
const PORT = 3000;

// start the server and listen for requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});