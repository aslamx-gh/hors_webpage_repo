"use strict";

const express = require("express");
const servicesController = require("../controllers/servicesController");

const router = express.Router();

// Create function
// router.param("id",)

router.route("/").get(servicesController.getAllServices);

module.exports = router;
