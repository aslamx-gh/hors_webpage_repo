"use strict";

const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailer = async (req, res) => {
    console.log("Mailer function called #dogCare");
};