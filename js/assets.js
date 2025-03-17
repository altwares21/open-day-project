document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
    window.location.href = 'collection.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    // Show the button when the user scrolls down 100px from the top of the document
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // When the user clicks the button, scroll back to the top
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});