$(function () {
    $('.feedback-inner').slick({
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
});

const links = document.querySelectorAll(".nav-item")
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}