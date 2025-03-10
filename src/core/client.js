const venom = require("venom-bot");

let socket = null;

const init = () => {
    return venom
        .create({
            session: "session",
            folderNameToken: "auth",
            headless: "new"
        })
        .then((instance) => {
            socket = instance
        });
};

const client = () => socket;

module.exports = { init, client };
