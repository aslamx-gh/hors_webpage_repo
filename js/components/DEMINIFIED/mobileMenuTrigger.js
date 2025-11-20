"use strict";

let menuBtnTransition;

export function menuTriggerFunction(el_FLAG, el_STATE, el_STYLING) {
    // Clear the previous timeout if it exists
    clearTimeout(menuBtnTransition);

    if (el_FLAG.display === "none") {
        el_STATE.classList.remove("close-menu");
        if (!el_STATE.classList.contains("open-menu")) {
            el_STATE.classList.add("open-menu");
        }
        el_STATE.style.display = "block";
        menuBtnTransition = setTimeout(() => {
            el_STYLING.setAttribute("src", "./img/mobile/menu-state--closing.png");

            menuBtnTransition = setTimeout(() => {
                el_STYLING.setAttribute("src", "./img/mobile/x-logo.png");
            }, 350); // 150 ms
        }, 100); // 60 ms
        // el_STATE.classList.remove("open-menu");
    } else {
        el_STATE.classList.remove("open-menu");
        if (!el_STATE.classList.contains("close-menu")) {
            el_STATE.classList.add("close-menu");
        }
        setTimeout(() => {
            el_STATE.style.display = "none";
        }, 950);
        menuBtnTransition = setTimeout(() => {
            el_STYLING.setAttribute("src", "./img/mobile/menu-state--closing.png");
            menuBtnTransition = setTimeout(() => {
                el_STYLING.setAttribute("src", "./img/mobile/menu.png");
            }, 350);
        }, 100);
        // el_STATE.classList.remove("close-menu");
    }

    // el_STATE.classList.remove("close-menu");
    console.log(menuBtnTransition); // Logging the timeout ID for debugging
}