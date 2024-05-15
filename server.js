const app = require("./src/app");
const PORT = process.env.PORT || 6970;
// init network nodejs
const server = app.listen(6970, () => {
    console.log(`Server running on port ${PORT}`);
});

// not touch in here
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
    })
});