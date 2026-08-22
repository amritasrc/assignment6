# How the Server Works

I used Node.js's built-in `http` module to understand how basic HTTP servers and routing work.

When a user visits a URL, the server receives the request and checks `req.url` to determine which file is being requested.

For example:

* `/` → serves `home.html`
* `/about` → serves `about.html`
* `/contact` → serves `contact.html`
* `/style.css` → serves the CSS file
* `/images/...` → serves the required image files

The server uses the `fs` module to read these files and sends the file data to the browser using `res.end()`.

## File Serving with a Helper Function

Instead of writing the same `fs.readFile()` and error-handling code for every route, I created a reusable `serveFile()` function.

The function receives:

* The response object
* The file path
* The content type
* The HTTP status code

For example:

```js
serveFile(res, './about.html', 'text/html');
```

This keeps the routing code shorter and avoids repeating the same logic for every file.

I used this to make the server more modular and easier to maintain.

## HTTP Status Codes

The server handles different HTTP status codes depending on the result of the request:

* `200` — The requested file was successfully served.
* `404` — The requested route does not exist, so the `404.html` page is displayed.
* `500` — Error occurred while reading a file.

## Content-Type Headers

The server sends the correct `Content-Type` header depending on the type of file being requested.

Examples:

* HTML files → `text/html`
* CSS files → `text/css`
* JPEG images → `image/jpeg`
* PNG images → `image/png`

This allows the browser to correctly interpret the files returned by the server.

## Request Logging

I also added console logs that log every request sent to the server, so that each request can be viewed in the terminal.

For example:

```text
GET /
GET /style.css
GET /images/hero-img.jpg
GET /about
GET /contact
```

This helped me verify that the routes and static files were being requested correctly.

## How to Run

First, make sure Node.js is installed on your system.

Open the project folder in the terminal and run:

```bash
node server.js
```

The server will start on port `3000`.

Open the following address in your browser:

`http://localhost:3000`

## Testing

I tested the different routes to verify that the server responds correctly.

The following routes were tested:

* Home page
* About page
* Contact page
* CSS file
* Image files
* Invalid route / 404 page

The terminal request logs were also checked to confirm that the browser was requesting the expected resources.

## Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### About Page

![About Page](./screenshots/about.png)

### Contact Page

![Contact Page](./screenshots/contact.png)

### 404 Page

![404 Page](./screenshots/404.png)

