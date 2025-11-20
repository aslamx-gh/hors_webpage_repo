"use strict";

export function show_return_btn(scroll_scan_el, btnId, pos) {
    if (scroll_scan_el.scrollTop < pos) {
        btnId.style.display = "none";
    } else {
        btnId.style.display = "block";
        console.log("working");
    }
}