
document.addEventListener('DOMContentLoaded', function () {
    // Find the "Nabídka" link element
    const navLink = document.querySelector('a[aria-current="page"][href="#"]');
    
    const itemListSection = document.querySelector('#header-item-list');

    navLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Calculate the offset from the top of the page to the target section
        const offset = itemListSection.offsetTop;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});

