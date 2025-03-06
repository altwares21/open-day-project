document.addEventListener("DOMContentLoaded", function() {
    fetchFiguresProducts();
});

function fetchFiguresProducts() {
    fetch('api/figures.json')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('figures-products');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
                productCard.innerHTML = `
                    <div class="card h-100 product-card text-center">
                        <a href="product.html?id=${product.id}">
                            <img src="${product.image}" class="card-img-top img-fluid" alt="${product.title}">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title fs-4">${product.title}</h5>
                            <p class="card-text fs-5">$${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching figures products:', error);
        });
}
