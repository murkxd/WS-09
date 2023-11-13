document.addEventListener('DOMContentLoaded', function () {
    const nabidkaLink = document.querySelector('a[href="#header-item-list"]');
    const serviceLink = document.querySelector('a[href="#service-header-list"]');
    const listitem1 = document.querySelector('a[href="#list-item-1"]');
    const listitem2 = document.querySelector('a[href="#list-item-2"]');
    const listitem3 = document.querySelector('a[href="#list-item-3"]');
    const listitem4 = document.querySelector('a[href="#list-item-4"]');
    const listitem5 = document.querySelector('a[href="#list-item-5"]');

    nabidkaLink.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('header-item-list').offsetTop;
        window.scrollTo({
            top: offset - 80,
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

    listitem1.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('list-item-1').offsetTop;
        window.scrollTo({
            top: offset - 60,
            behavior: 'smooth'
        });
    });

    listitem2.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('list-item-2').offsetTop;
        window.scrollTo({
            top: offset - 60,
            behavior: 'smooth'
        });
    });

    listitem3.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('list-item-3').offsetTop;
        window.scrollTo({
            top: offset - 60,
            behavior: 'smooth'
        });
    });

    listitem4.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('list-item-4').offsetTop;
        window.scrollTo({
            top: offset - 60,
            behavior: 'smooth'
        });
    });

    listitem5.addEventListener('click', function (event) {
        event.preventDefault();
        const offset = document.getElementById('list-item-5').offsetTop;
        window.scrollTo({
            top: offset - 60,
            behavior: 'smooth'
        });
    });
});

// window.addEventListener("scroll", function () {
//     const carousel = document.getElementById("carouselExampleIndicators");
//     const navbar = document.getElementById("navbar");
//     const navitem = document.getElementById("hidden-spy");

//     if (carousel.bottom < 5) {
//         navbar.classList.remove('lightnav');
//         navbar.classList.add('darknav');
//         navbg.classList.remove('lightnavbg');
//         navbg.classList.add('darknavbg');
//     } else {
//         navbar.classList.remove('darknav');
//         navbar.classList.add('lightnav');
//         navbg.classList.remove('darknavbg');
//         navbg.classList.add('lightnavbg');
// }});
