document.addEventListener("DOMContentLoaded", function () {
    const apparelProductsContainer = document.getElementById("apparel-products");

    // Filter apparel products from the products array
    const apparelProducts = products.filter(product => product.category === "Apparel");

    // Generate product cards dynamically
    apparelProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.images[0]}" class="card-img-top img-fluid lazy" alt="${product.name}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title text-center">${product.name}</h5>
                    <p class="card-text text-center">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        apparelProductsContainer.appendChild(productCard);
    });
});