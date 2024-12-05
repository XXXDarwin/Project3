document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('.page-link');
    const pages = document.querySelectorAll('.page');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentPageIndex = 0;

    pageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    prevButton.addEventListener('click', function() {
        currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
        showPage(pages[currentPageIndex].id);
    });

    nextButton.addEventListener('click', function() {
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        showPage(pages[currentPageIndex].id);
    });

    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.style.display = 'block';
                currentPageIndex = Array.from(pages).indexOf(page);
            } else {
                page.style.display = 'none';
            }
        });

        pageLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Показать первую страницу по умолчанию
    showPage('page1');
});