// Import the HTTP module
const http = require('http');

// Import the File System module
const fs = require('fs');


// Reusable function to read and serve files
function serveFile(res, filePath, contentType, statusCode = 200) {

    fs.readFile(filePath, (err, data) => {

        // Handle file reading errors
        if (err) {
            console.error(`Error reading file: ${filePath}`, err);

            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });

            res.end('Something went wrong while loading the file.');
            return;
        }

        // Send the file to the browser
        res.writeHead(statusCode, {
            'Content-Type': contentType
        });

        res.end(data);
    });
}


// Create an HTTP server
const app = http.createServer((req, res) => {

    // Log every request in the terminal
    console.log(`${req.method} ${req.url}`);


    // Home route
    if (req.url === '/') {
        serveFile(res, './home.html', 'text/html');
    }


    // About route
    else if (req.url === '/about') {
        serveFile(res, './about.html', 'text/html');
    }


    // Contact route
    else if (req.url === '/contact') {
        serveFile(res, './contact.html', 'text/html');
    }


    // CSS file
    else if (req.url === '/style.css') {
        serveFile(res, './style.css', 'text/css');
    }

    else if (req.url === '/images/hero-img.jpg') {
        serveFile(res, './images/hero-img.jpg', 'image/jpeg');
    }

    else if (req.url === '/images/affordable-prices-icon.png') {
        serveFile(res, './images/affordable-prices-icon.png', 'image/png');
    }


    else if (req.url === '/images/washing-machine-icon.png') {
        serveFile(res, './images/washing-machine-icon.png', 'image/png');
    }


    else if (req.url === '/images/customer-support.png') {
        serveFile(res, './images/customer-support.png', 'image/png');
    }


    else if (req.url === '/images/fast-delivery.png') {
        serveFile(res, './images/fast-delivery.png', 'image/png');
    }


    // Handle unknown routes
    else {
        serveFile(res, './404.html', 'text/html', 404);
    }
});


// Define the port number
const PORT = 3000;


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});