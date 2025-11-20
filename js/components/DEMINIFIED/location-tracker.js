"use strict";

const distance_span = document.getElementById("distance");

// Location: Dolenjska cesta 141
const serviceLat = 46.023373266213255;
const serviceLon = 14.540794469206393;

// Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        function(position) {
            // console.log("Latitude: " + position.coords.latitude);
            // console.log("Longitude: " + position.coords.longitude);
            const clientLat = position.coords.latitude;
            const clientLon = position.coords.longitude;
            const distance = getDistance(clientLat, clientLon, serviceLat, serviceLon).toFixed(1);
            console.log(distance);
            if (distance < 1) {
                console.log("<1");
            }
            console.log(position.coords.latitude, position.coords.longitude);
            distance_span.innerHTML = `${distance}Km`;
        },
        function(error) {
            console.error("Napaka pri pridobivanju lokacije: ", error.message);
        }, {
            enableHighAccuracy: true, // Request GPS for better accuracy
            timeout: 10000, // Wait up to 10 sec
            maximumAge: 0, // No cached location
        }
    );
} else {
    console.log("Geolokacija ni podprta v tem brskalniku.");
}

// Location: Dolenjska cesta 141
// 46.023373266213255, 14.540794469206393