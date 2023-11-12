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
