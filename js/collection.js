document.addEventListener('DOMContentLoaded', function() {
    const filteredProducts = JSON.parse(localStorage.getItem('filteredProducts')) || [];
    updateSearchResultsHeading(filteredProducts.length);
    renderProducts(filteredProducts);

    // Add event listener for the search form
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
        updateSearchResultsHeading(filteredProducts.length);
        renderProducts(filteredProducts);
    });
});

function updateSearchResultsHeading(count) {
    const heading = document.getElementById('search-results-heading');
    heading.textContent = `Search Results (${count})`;
}

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        console.log(`Rendering product: ${product.name}, Image path: ${product.images[0]}`);
        const productElement = document.createElement('div');
        productElement.className = 'col-12 col-sm-6 col-md-6 col-lg-4 mb-4';
        productElement.innerHTML = `
            <div class="card h-100 product-card text-center">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" class="card-img-top img-fluid" alt="${product.name}">
                </a>
                <div class="card-body">
                    <h5 class="card-title fs-4">${product.name}</h5>
                    <p class="card-text fs-5">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        productList.appendChild(productElement);
    });
}
