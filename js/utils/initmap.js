"use strict";

function initMap() {
    const location = {
        lat: 46.02322,
        lng: 14.540815
    }; // primer: Ljubljana
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });

    /*const marker = new google.maps.Marker({
      position: location,
      map: map,
    });*/

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Varstvo psov, sprehajanje in šolanje | Hors.si – Ljubljana",
        icon: {
            url: "../../assets/hors-logo--map.png",
            scaledSize: new google.maps.Size(35, 35),
        },
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<strong>Varstvo psov, sprehajanje in šolanje | Hors.si – Ljubljana</strong>",
    });

    marker.addListener("mouseover", () => infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false
    }));
    marker.addListener("mouseout", () => infoWindow.close());

}