
document.addEventListener('DOMContentLoaded', function () {
    const navLink = document.querySelector('a[aria-current="page"][href="#"]');
    const itemListSection = document.querySelector('#header-item-list');

    navLink.addEventListener('click', function (event) {
        const offset = itemListSection.offsetTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});