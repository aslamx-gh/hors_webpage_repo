"use strict";

import {
    menuTriggerFunction
} from "../components/mobileMenuTrigger.js";
import {
    responsive_header
} from "../utils/responsive-header.js";

const header = document.getElementById("header");
const show_menu = document.getElementById("show-menu");
const menuTrigger = document.getElementById("menu-trigger--btn");
const menuBtnStyle = document.getElementById("menu-btn--style");
const head_wrapper = document.getElementById("head-wrapper");
// const main = document.getElementById("main");
const MENU_FLAG = window.getComputedStyle(show_menu);

const contactForm = document.getElementById("contact-form");
const clientName = document.getElementById("client-name");
const clientMail = document.getElementById("client-mail");
const mailSubject = document.getElementById("mail-subject");
const mailMsg = document.getElementById("mail-msg--content");
const SEND_CHECKER = document.getElementById("send-checker");

menuTrigger.addEventListener("click", () => {
    menuTriggerFunction(MENU_FLAG, show_menu, menuBtnStyle);
});

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        name: clientName.value,
        email: clientMail.value,
        subject: mailSubject.value,
        message: mailMsg.value,
    };

    const response = await fetch("https://hors-backend.onrender.com/api/v1/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    let inputs = document.querySelectorAll("input");
    let textarea = document.querySelectorAll("textarea");

    if (response.ok) {
        console.log("Email sent successfully!");
        inputs.forEach((input) => (input.value = ""));
        textarea.forEach((input) => (input.value = ""));
        SEND_CHECKER.style.display = "block";
        setInterval(() => {
            SEND_CHECKER.style.display = "none";
        }, 2000);
    } else {
        console.log("Failed to send email.");
    }
});

responsive_header(head_wrapper, show_menu);

window.addEventListener("resize", responsive_header);