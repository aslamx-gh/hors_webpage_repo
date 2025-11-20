'use strict';

const menu_items = document.querySelectorAll(".menu-item");

switch (window.location.pathname) {
    case "/index.html":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[0].children[0].style.color = "#e36414";
        break;
    case "/":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[0].children[0].style.color = "#e36414";
        break;
    case "/storitve.html":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[1].children[0].style.color = "#e36414";
        break;
    case "/cenik.html":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[2].children[0].style.color = "#e36414";
        break;
    case "/omeni.html":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[3].children[0].style.color = "#e36414";
        break;
    case "/kontakt.html":
        // menu_items[0].style.opacity = 0.75;
        console.log(menu_items[0].children);
        menu_items[4].children[0].style.color = "#e36414";
        break;
    default:
        break;
}