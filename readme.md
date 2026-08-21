### How the Server Works

The server is created using Node.js's built-in `http` module. When a user visits a URL, the server checks the requested route using `req.url`. Based on the route, it uses `fs.readFile()` to read the required HTML file and then sends it to the browser using `res.end()`.

The server handles different routes like `/home`, `/about`, and `/contact`. It also serves the CSS and image files used in the website.

HTTP status codes are also handled in the server:
- `200` - request was successful
- `404` - page or route was not found
- `500` - error while reading a file

The server runs on port `3000` and can be accessed using:

`http://localhost:3000`

### How to Run

First, make sure Node.js is installed.

Open the project folder in the terminal and run:

```bash
node server.js

### Screenshots

![Home Page](./screenshots/home.png)

![About Page](./screenshots/about.png)

![Contact Page](./screenshots/contact.png)

![404 Page](./screenshots/404.png)