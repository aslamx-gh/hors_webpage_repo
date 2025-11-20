"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const servicesRouter = require("./routes/servicesRoute");
const contactRouter = require("./routes/contactFormRoute");

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/contact", contactRouter);

module.exports = app;