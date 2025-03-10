const { client } = require("../core/client");

const home = async (req, res) => {
    res.setHeader("content-type", "application/json"); // header

    return res.status(200).send(`   Endpoints:

    /send_message: [POST]
        parameters: chat_id, text

    /send_image: [POST]
        parameters: chat_id, image_url, image_name (optional), caption (optional)

    /send_document: [POST]
        parameters: chat_id, document_url, document_name (optional), caption (optional)`);
};

const send_message = async (req, res) => {
    let { chat_id, text } = req.body; // post

    if (!chat_id) {
        return res.status(400).json({ success: false, message: "enter the post parameter {chat_id}" });
    }

    if (!text) {
        return res.status(400).json({ success: false, message: "enter the post parameter {text}" });
    }

    const socket = client();

    if (!socket) {
        return res.status(500).json({ success: false, message: "wait for whatsapp to sync" });
    }

    // number + server (@c.us)
    chat_id = chat_id + `@c.us`

    try {
        await socket.sendText(chat_id, text)
            .then((response) => {
                res.status(200).json({
                    success: true,
                    chat_id: response.to.remote.user,
                    message_id: response.to._serialized
                });
            })
            .catch((error) => {
                res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
            });
    }
    catch (error) {
        res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
    }
};

const send_image = async (req, res) => {
    let { chat_id, image_url, image_name, caption } = req.body; // post

    if (!chat_id) {
        return res.status(400).json({ success: false, message: "enter the post parameter {chat_id}" });
    }

    if (!image_url) {
        return res.status(400).json({ success: false, message: "enter the post parameter {image_url}" });
    }

    const socket = client();

    if (!socket) {
        return res.status(500).json({ success: false, message: "wait for whatsapp to sync" });
    }

    // number + server (@c.us)
    chat_id = chat_id + `@c.us`

    try {
        // args optional: [image_name, caption]
        await socket.sendImage(chat_id, image_url, image_name || "image", caption || "")
            .then((response) => {
                res.status(200).json({
                    success: true,
                    chat_id: response.to.remote.user,
                    message_id: response.to._serialized
                });
            })
            .catch((error) => {
                res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
            });
    }
    catch (error) {
        res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
    }
};

const send_document = async (req, res) => {
    let { chat_id, document_url, document_name, caption } = req.body; // post

    if (!chat_id) {
        return res.status(400).json({ success: false, message: "enter the post parameter {chat_id}" });
    }

    if (!document_url) {
        return res.status(400).json({ success: false, message: "enter the post parameter {document_url}" });
    }

    const socket = client();

    if (!socket) {
        return res.status(500).json({ success: false, message: "wait for whatsapp to sync" });
    }

    // number + server (@c.us)
    chat_id = chat_id + `@c.us`

    try {
        // args optional: [document_name, caption]
        await socket.sendFile(chat_id, document_url, document_name || "file", caption || "")
            .then((response) => {
                res.status(200).json({
                    success: true,
                    chat_id: response.to.remote.user,
                    message_id: response.to._serialized
                });
            })
            .catch((error) => {
                res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
            });
    }
    catch (error) {
        res.status(500).json({ success: false, message: `an error occurred while sending the message: ${error}` });
    }
};

module.exports = { home, send_message, send_image, send_document };
