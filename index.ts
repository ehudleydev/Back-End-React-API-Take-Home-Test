// index.ts
// initializes server and base level middlewares

const server = require("./server.ts");

const appServer = server.init();

const port = process.env.PORT || 3000;

// start the server
appServer.listen(port, () => {
    console.log('Server running at:', port);
});