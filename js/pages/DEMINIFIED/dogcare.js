"use strict";

import {
    menuTriggerFunction
} from "../components/mobileMenuTrigger.js";
import {
    show_return_btn
} from "../components/showReturnBtn.js";
import {
    responsive_header
} from "../utils/responsive-header.js";

const header = document.getElementById("header");
const show_menu = document.getElementById("show-menu");
const menuTrigger = document.getElementById("menu-trigger--btn");
const menuBtnStyle = document.getElementById("menu-btn--style");
const head_wrapper = document.getElementById("head-wrapper");
const body = document.getElementById("body");
// const main = document.getElementById("main");
const MENU_FLAG = window.getComputedStyle(show_menu);

menuTrigger.addEventListener("click", () => {
    menuTriggerFunction(MENU_FLAG, show_menu, menuBtnStyle);
});

body.addEventListener("scroll", () => {
    show_return_btn(body, return_btn, 267.75);
});

responsive_header(head_wrapper, show_menu);

window.addEventListener("resize", responsive_header);