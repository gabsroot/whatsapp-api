const express = require("express");
const { home, send_message, send_image, send_document } = require("../core/messages");

const router = express.Router();

router.get("/", home);
router.post("/send_message", send_message);
router.post("/send_image", send_image);
router.post("/send_document", send_document);

module.exports = { router };
