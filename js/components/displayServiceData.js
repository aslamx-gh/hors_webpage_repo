"use strict";

import {
    saveData,
    build_service_item
} from "./../components/index_services.js";

export function displayServiceData(services, servicesContainer) {
    // console.log(jobs[0].img);
    for (let i = 0; i < services.length; i++) {
        saveData(i, services);
    }
    build_service_item(servicesContainer);
}