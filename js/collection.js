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
    heading.textContent = count > 0 ? `Search Results (${count})` : 'No results';
}

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
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

    if (products.length === 0) {
        document.getElementById('catalog-links').innerHTML = `
            <h2 class="text-center mb-4 display-4">Shop</h2>
        <div class="row mb-4">
            <div class="col-md-2 mb-4 offset-md-3">
                <div class="card catalog-card">
                    <a href="shop_apparel.html" class="section-link">
                        <div class="square-image">
                            <img src="products/Apparel/neko-luffy-tee2.jpg" alt="Apparel">
                        </div>
                        <div class="label">Apparel</div>
                    </a>
                </div>
            </div>
            <div class=" col-md-2 mb-4 mx-2">
                <div class="card catalog-card">
                    <a href="shop_accessories.html" class="section-link">
                        <div class="square-image">
                            <img src="products/Keychains/accessory-img.jpg" alt="Accessories">
                        </div>
                        <div class="label">Accessories</div>
                    </a>
                </div>
            </div>
                <div class=" col-md-2 mb-4 mx-2">
                    <div class="card catalog-card">
                        <a href="shop_figures.html" class="section-link">
                            <div class="square-image">
                                <img src="products/Figures/tengen-funko.jpg" alt="Figures">
                            </div>
                            <div class="label">Figures</div>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}