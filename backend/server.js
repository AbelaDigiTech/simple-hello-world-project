const express = require('express');  // Import Express.js library
const app = express();               // Create an Express application instance
const port = 3000;                   // Define the port number for the server to listen on

// Define a GET route for '/hello'
app.get('/hello', (req, res) => {
  res.send('<h1>Hello World</h1>');  // Send the HTML string as the response
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);  // Log a message to confirm server start
});

/*
Line-by-Line Explanation of Backend Code:

const express = require('express');: 
-   This imports the Express.js module, which is a web framework for Node.js. 
-   It allows us to create servers and handle HTTP requests easily. 
-   We use require because this is CommonJS syntax (default in Node.js without ES modules).

const app = express();: 
-   This initializes an Express application. 
-   app is now an object that represents our web server, and we can attach routes and middleware to it.

const port = 3000;: 
-   We define a constant for the port (3000 is a common development port). 
-   The server will listen for incoming connections on this port.

app.get('/hello', (req, res) => { ... });: 
-   This defines a route handler for HTTP GET requests to the path /hello.
-   app.get() is a method to handle GET requests.
-   The first argument '/hello' is the URL path (endpoint).
-   The second argument is a callback function that runs when the route is hit. It takes two parameters:

req: The request object, containing info about the incoming request (e.g., headers, query params). 
    -   We don't use it here.

res: The response object, used to send data back to the client.
        - res.send('<h1>Hello World</h1>');: 
        - Inside the callback, this sends the HTML string as the response body. 
        - res.send() automatically sets the Content-Type header to text/html based on 
          the string content and ends the response.

app.listen(port, () => { ... });: This starts the server.
    - listen() binds the app to the port and starts listening for requests.
    - The callback function runs once the server is up, logging a message to the console for confirmation. This helps during development to know the server is running.

To run the backend: 

- In the backend folder, execute node server.js. 
- It will start the server at http://localhost:3000.

With the backend running, open frontend/index.html in a browser 
    (e.g., via file:// or a local server like Live Server in VS Code). 
    - It should fetch and display "Hello World" inside the div.
*/