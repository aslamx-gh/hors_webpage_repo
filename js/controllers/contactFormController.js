"use strict";

const nodemailer = require("nodemailer");
require("dotenv").config();

exports.mailer = async (req, res) => {
    console.log("Mailer function called #contact");
    const {
        name,
        email,
        subject,
        message
    } = req.body;
    2;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        debug: true,
    });

    const mailObj = {
        from: name + process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: subject,
        text: message,
        replyTo: email,
        headers: {
            "Reply-To": email,
        },
    };

    try {
        await transporter.sendMail(mailObj);
        res.status(200).json({
            message: "Email sent successfully..."
        });
    } catch (error) {
        console.error("Error sending mail: " + error);
        res.status(500).json({
            error: "Failed to send mail!",
            details: error.message
        });
    }
};