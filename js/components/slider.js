import Splide from "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.esm.min.js";
// import Splide from "@splidejs/splide";

export function splide_build() {
    new Splide("#image-carousel", {
        type: "loop",
        perPage: 1,
        focus: "center",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: false,
        pagination: false,
    }).mount();
}