document.addEventListener("DOMContentLoaded", function () {
    const figureProductsContainer = document.getElementById("figures-products");

    // Filter apparel products from the products array
    const figureProducts = products.filter(product => product.category === "Figures");

    // Generate product cards dynamically
    figureProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-md-6 col-lg-4 mb-4";
        productCard.innerHTML = `
            <div class="card product-card h-100">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" class="card-img-top img-fluid lazy" alt="${product.name}" loading="lazy">
                </a>
                <div class="card-body">
                    <h5 class="card-title text-center fs-4">${product.name}</h5>
                    <p class="card-text text-center fs-5">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        figureProductsContainer.appendChild(productCard);
    });
});