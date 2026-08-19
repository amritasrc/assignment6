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