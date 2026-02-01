This example shows a Simple Backend Route Returning an HTML Element.

This is the simplest demo project to get started with a Node.js backend using Express.js and a basic frontend that consumes it. The backend will expose a single GET endpoint (/hello) that returns a plain HTML string: <h1>Hello World</h1>. The frontend will be a basic HTML page with JavaScript that makes a GET request (using fetch) to this endpoint, retrieves the HTML string, and injects it into the DOM. This demonstrates the fundamental client-server interaction where the frontend dynamically loads content from the backend.

We'll keep it minimal: no CSS or additional files yet. The project is structured as a single repository with separate folders for backend and frontend. In a real setup, you'd run the backend server and open the frontend HTML in a browser. Later examples will build on this.

Folder Structure:

1-Returning-an-HTML-Element/
├── backend/
│   ├── package.json       // Dependencies and scripts for Node.js
│   ├── server.js          // Express.js backend code
├── frontend/
│   ├── index.html         // Main HTML file with JS to fetch from backend
└── README.md              // Optional: Instructions to run the project

To set up:

(A):    Create the folders as shown.

In the backend folder, run npm init -y to create package.json, then npm install express to add Express.js.
The frontend is static and doesn't need npm; just open index.html in a browser after starting the backend.

RUNNING THE PROGRAM:

To run the program, start the backend:

1.  Go to terminal, change directory to backend folder where you created server.js

        - cd backend and type:
        - node server.js.

2.  With the backend running, open frontend/index.html in a browser 
    (e.g., via file:// or a local server like Live Server in VS Code). 
    - It should fetch and display "Hello World" inside the div.

(B): Uploading to GitHub

Initialize Git: 

1.  In the project root (1-Returning-an-HTML-Element/), run git init.

2.  Add files: git add .gi

3.  Commit: git commit -m "Initial commit for simple hello world project".

4.  Create a repo on GitHub (e.g., named "simple-hello-world-project").

5.  Add remote: git remote add origin https://github.com/yourusername/simple-hello-world-project.git.

6.  Push: git push -u origin main.

(C):  Deployment to Render.com (Free Tier)

1.  Render.com is a platform for deploying web apps. We'll deploy the backend as a "Web Service" (free
    tier supports Node.js).

2.  Sign up/login at render.com.

3.  Create a new "Web Service" > Connect your GitHub repo > Select the repository.

4.  Settings:

    (i)     Root Directory: backend (since server.js is there).
    (ii)    Runtime: Node.
    (iii)   Build Command: npm install.
    (iv)    Start Command: node server.js.
    (V)     Branch: main.

5.  Deploy. Once done, Render gives a URL like https://your-service.onrender.com.
    - Note: Free tier may spin down after inactivity; requests wake it up.

(D):    Updating Frontend to Consume Render.com Endpoint

1.  Update the fetch URL in frontend/index.html script:
    - Change fetch('http://localhost:3000/hello') to fetch('https://your-service.onrender.com/hello').

2.  Commit and push to GitHub if needed. Since frontend is static, you can host it separately (e.g.,
    GitHub Pages), but for now, just edit locally and reload.

3.  Test: 
    - Open updated index.html; it should fetch from the deployed backend.

