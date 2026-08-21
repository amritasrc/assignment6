// import http module
const http = require('http');
//import file system module
const fs = require('fs');

// create an http server
const app = http.createServer((req, res) => {

    // check which route the user is requesting
    if (req.url === '/') {
        // read the html file
        fs.readFile('./home.html', (err, data) => {

            // handle error
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong');
                return;
            }

            // send html file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // about route
    else if (req.url === '/about') {
        // read the html file
        fs.readFile('./about.html', (err, data) => {

            // handle error
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong');
                return;
            }

            // send html file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // contact route
    else if (req.url === '/contact') {
        // read the html file
        fs.readFile('./contact.html', (err, data) => {

            // handle error
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong');
                return;
            }

            // send html file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    // css file
    else if (req.url === '/style.css') {

        fs.readFile('./style.css', (err, data) => {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }


    // if the route does not exist
    else {

        // read the html file
        fs.readFile('./404.html', (err, data) => {

            // handle error
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Something went wrong');
                return;
            }

            // send 404 html file
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

// define port number
const PORT = 3000;

// start the server and listen for requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});