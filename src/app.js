const express = require("express");
const { init } = require("./core/client");
const { router } = require("./core/routes");

const app = express();
const port = 80;

// middleware
app.use(express.json());
app.use("/", router);

// server init
init()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error(`An error occurred while initializing the server: ${error}`);
    });
