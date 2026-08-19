<<<<<<< HEAD
// Import modules
const http = require('http');
const fs = require('fs');


// HTTP server
const server = http.createServer((req, res) => {

    // Handle the homee page
    if (req.url === '/' || req.url === '/home') {

        // Read the home.html 
        fs.readFile('./home.html', (err, data) => {

            // Handle error
            if (err) {
                res.statusCode = 500;
                res.end('Error loading Home page');
                return;
            }

            // Send home page to browser
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }


    // Handle the About page
    else if (req.url === '/about') {

        fs.readFile('./about.html', (err, data) => {

            // Handle error 
            if (err) {
                res.statusCode = 500;
                res.end('Error loading About page');
                return;
            }

            // Send about page to browser
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }


    // Handle the Contact page
    else if (req.url === '/contact') {

        fs.readFile('./contact.html', (err, data) => {

            // Handle error 
            if (err) {
                res.statusCode = 500;
                res.end('Error loading Contact page');
                return;
            }

            // Send Contact page to browser
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }


    // Handle the CSS file
    else if (req.url === '/style.css') {

        fs.readFile('./style.css', (err, data) => {

            // Handle error 
            if (err) {
                res.statusCode = 500;
                res.end('Error loading CSS');
                return;
            }

            // Send CSS file 
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });

    }


    // Handle images 
    else if (req.url.startsWith('/images/')) {

        // Read image file
        fs.readFile('.' + req.url, (err, data) => {

            // If image does not exist
            if (err) {
                res.statusCode = 404;
                res.end('Image not found');
                return;
            }

            // Send image to browser
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/png');
            res.end(data);
        });

    }


    // Handle random routes
    else {

        // 404 not found page
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        `);
    }
});


// server port
const PORT = 3000;


// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


//check readme for code explanation, logs/screenshots, etc.
=======
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home') {

        fs.readFile('./home.html', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end('Error loading Home page');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }

    else if (req.url === '/about') {

        fs.readFile('./about.html', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end('Error loading About page');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }

    else if (req.url === '/contact') {

        fs.readFile('./contact.html', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end('Error loading Contact page');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });

    }

    else if (req.url === '/style.css') {

        fs.readFile('./style.css', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end('Error loading CSS');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });

    }

    else if (req.url.startsWith('/images/')) {

        fs.readFile('.' + req.url, (err, data) => {

            if (err) {
                res.statusCode = 404;
                res.end('Image not found');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'image/png');
            res.end(data);
        });

    }

    else {

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        `);
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
>>>>>>> 84c28eb15082116d0550aec0f6abefa5c5558b74
