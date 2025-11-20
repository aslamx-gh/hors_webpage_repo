"use strict";

export const responsive_header = function(head_wrapper, container) {
    if (window.innerWidth > 1024) {
        head_wrapper.appendChild(container);
        // head_wrapper.style.width = "800px";
    }
};