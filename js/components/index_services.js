"use strict";

export function init_service_item(services) {
    for (let i = 0; i < services.length; i++) {
        const serviceWrapper = services[i];

        const serviceIcon = document.createElement("img");
        const serviceTitle = document.createElement("h2");
        const serviceDescription = document.createElement("p");
        const serviceMoreBtn = document.createElement("button");

        serviceIcon.setAttribute("class", "service-icon");
        serviceTitle.setAttribute("class", "service-title");
        serviceDescription.setAttribute("class", "service-description");
        serviceMoreBtn.setAttribute("class", "service-more--btn");

        serviceWrapper.appendChild(serviceIcon);
        serviceWrapper.appendChild(serviceTitle);
        serviceWrapper.appendChild(serviceDescription);
        serviceWrapper.appendChild(serviceMoreBtn);
    }
}

const servicesImgs = [];
const servicesTitles = [];
const servicesDescriptions = [];
const servicesTarget = [];
const servicesAlts = [];

export const saveData = (idx, services) => {
    servicesImgs.push(services[idx].img);
    servicesTitles.push(services[idx].title);
    servicesDescriptions.push(services[idx].description);
    servicesTarget.push(services[idx].target);
    servicesAlts.push(services[idx].alt);
};

export function build_service_item(services) {
    // Loop through jobs wrappers and dinamically append childs to themselves
    for (let i = 0; i < services.length; i++) {
        // Create job img element
        const serviceImg = document.getElementsByClassName("service-icon");
        const fixedServicesImgsArr = servicesImgs.filter((job) => job !== undefined);

        const fixedServicesAltsArr = servicesAlts.filter((alt) => alt !== undefined);

        serviceImg[i].setAttribute("src", fixedServicesImgsArr[i]);
        serviceImg[i].setAttribute("alt", fixedServicesAltsArr[i]);
        console.log(servicesAlts)


        /*console.log(fixedServicesImgsArr);
        const setServicesImg = serviceImg[i].setAttribute("src", fixedServicesImgsArr[i]);
        
        const setServicesImgAlt = serviceImg[i].setAttribute("alt", fixedServicesImgsArr[i]); */

        // Create job title element
        const serviceTitle = document.getElementsByClassName("service-title");
        console.log(serviceTitle);
        serviceTitle[i].textContent = servicesTitles[i];

        // Create job description element
        const serviceDescription = document.getElementsByClassName("service-description");
        serviceDescription[i].textContent = servicesDescriptions[i];

        // Create job more button element
        const serviceMoreBtn = document.getElementsByClassName("service-more--btn");
        console.log(serviceMoreBtn);
        serviceMoreBtn[i].textContent = "Več";

        serviceMoreBtn[i].addEventListener("click", () => {
            window.location.href = servicesTarget[i];
        });
    }
}