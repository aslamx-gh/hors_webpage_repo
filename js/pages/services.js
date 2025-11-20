"use strict";

import {
    menuTriggerFunction
} from "../components/mobileMenuTrigger.js";
import {
    init_service_item
} from "../components/index_services.js";
import {
    displayServiceData
} from "../components/displayServiceData.js";
import {
    responsive_header
} from "../utils/responsive-header.js";

const header = document.getElementById("header");
const head_wrapper = document.getElementById("head-wrapper");
const show_menu = document.getElementById("show-menu");
const menuTrigger = document.getElementById("menu-trigger--btn");
const menuBtnStyle = document.getElementById("menu-btn--style");
// const main = document.getElementById("main");
const MENU_FLAG = window.getComputedStyle(show_menu);
const servicesContainer = document.getElementsByClassName("services-wrappers");
const body = document.getElementById("body");

menuTrigger.addEventListener("click", () => {
    menuTriggerFunction(MENU_FLAG, show_menu, menuBtnStyle);
});

init_service_item(servicesContainer);

async function fetchData() {
    try {
        const response = await fetch("https://hors-backend.onrender.com/api/v1/services");
        if (!response.ok) {
            throw new Error("Network error: " + response + ".");
        }
        const data = await response.json();
        // console.log(data);
        displayServiceData(data.services.service, servicesContainer);
    } catch (err) {
        console.error(err);
    }
}

responsive_header(head_wrapper, show_menu);

window.addEventListener("resize", responsive_header);

window.onload = fetchData;