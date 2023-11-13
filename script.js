document.addEventListener('DOMContentLoaded', function () {
    const nabidkaLink = document.querySelector('a[href="#header-item-list"]');
    const serviceLink = document.querySelector('a[href="#service-header-list"]');

    nabidkaLink.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('header-item-list').offsetTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });

    serviceLink.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('service-header-list').offsetTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-example'
    });
});

window.addEventListener("scroll", function () {
    const carousel = document.getElementById("carouselExampleIndicators");
    const navbar = document.getElementById("navbar");
    const navbg = document.getElementById('navbg');


    const rect = midText.getBoundingClientRect();

 
    if (rect.bottom < 5) {
        navbar.classList.remove('lightnav');
        navbar.classList.add('darknav');
        navbg.classList.remove('lightnavbg');
        navbg.classList.add('darknavbg');
    } else {
        navbar.classList.remove('darknav');
        navbar.classList.add('lightnav');
        navbg.classList.remove('darknavbg');
        navbg.classList.add('lightnavbg');
}});
