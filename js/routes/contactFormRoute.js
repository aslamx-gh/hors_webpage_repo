"use strict";

const express = require("express");
const contactFormController = require("../controllers/contactFormController");

const router = express.Router();

router.route("/").post(contactFormController.mailer);

module.exports = router;
