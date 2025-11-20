"use strict";

const fs = require("fs");
const path = require("path");

const services = JSON.parse(fs.readFileSync(path.join(__dirname, `../../data/services.json`), "utf8"));

exports.getAllServices = (req, res) => {
    res.status(200).json({
        status: "success",
        results: services.length,
        services,
    });
};