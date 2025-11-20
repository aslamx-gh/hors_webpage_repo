"use strict";

// import globalMobileSCSS from "../../css/scss/mobile/global.scss";
// import globalTabletSCSS from "../../css/scss/tablet/global.scss";
// import globalSmallDesktopSCSS from "../../css/scss/desktops/small/global.scss";
// import globalLargeDesktopSCSS from "../../css/scss/desktops/large/global.scss";

// import mobileSCSS from "../../css/scss/mobile/index.scss";
// import tabletSCSS from "../../css/scss/tablet/index.scss";
// import smallDesktopSCSS from "../../css/scss/desktops/small/index.scss";
// import largeDesktopSCSS from "../../css/scss/desktops/large/index.scss";

import {
    splide_build
} from "../components/slider.js";
import {
    menuTriggerFunction
} from "./../components/mobileMenuTrigger.js";
import {
    init_service_item
} from "./../components/index_services.js";
import {
    show_return_btn
} from "../components/showReturnBtn.js";
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
const main = document.getElementById("main");
const MENU_FLAG = window.getComputedStyle(show_menu);
const servicesContainer = document.getElementsByClassName("services-wrappers");
const body = document.getElementById("body");
const footer = document.getElementById("footer");
const return_btn = document.getElementById("return-home--btn");
const gallery_container = document.getElementById("gallery-container");
const question_container = document.getElementsByClassName("vprasanje-container");
const answer_trigger = document.querySelectorAll(".answer-trigger");
const answer_container = document.getElementById("odgovor-container");
// const answer_container = document.getElementsByClassName("odgovor-container");

splide_build();

answer_trigger.forEach((answer_trigger) => {
    answer_trigger.addEventListener("click", (event) => {
        event.preventDefault();

        let parent_padding_fixed = answer_trigger.parentElement;
        let odgovor_container = answer_trigger.nextElementSibling;
        let arrow_icon = answer_trigger.querySelector(".right-arr--indicator");

        console.log(parent_padding_fixed);
        console.log(arrow_icon);

        if (odgovor_container.style.display === "flex") {
            odgovor_container.style.display = "none";
            arrow_icon.style.transform = "rotate(0deg)";
            parent_padding_fixed.style.paddingBottom = "1rem";
        } else {
            arrow_icon.style.transform = "rotate(-90deg)";
            odgovor_container.style.display = "flex";
            parent_padding_fixed.style.paddingBottom = "0rem";
        }
    });
});

menuTrigger.addEventListener("click", () => {
    menuTriggerFunction(MENU_FLAG, show_menu, menuBtnStyle);
});

init_service_item(servicesContainer);

body.addEventListener("scroll", () => {
    show_return_btn(body, return_btn, 267.75);
});

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