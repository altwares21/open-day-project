document.addEventListener("DOMContentLoaded", function () {
    const apparelProductsContainer = document.getElementById("apparel-products");

    // Filter apparel products from the products array
    const apparelProducts = products.filter(product => product.category === "Apparel");

    // Generate product cards dynamically
    apparelProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-md-6 col-lg-4 mb-4";
        productCard.innerHTML = `
            <div class="card h-100">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" class="card-img-top img-fluid lazy" alt="${product.name}" loading="lazy">
                </a>
                <div class="card-body">
                    <h5 class="card-title text-center fs-4">${product.name}</h5>
                    <p class="card-text text-center fs-5">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        apparelProductsContainer.appendChild(productCard);
    });

    const dryFitProductsContainer = document.getElementById("dry-fit-products");

    const dryFitProducts = products.filter(product => product.category === "Dry Fit");

    dryFitProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-12 col-sm-6 col-md-4 col-lg-4 mb-4";
        productCard.innerHTML = `
            <div class="card h-100">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" class="card-img-top img-fluid lazy" alt="${product.name}" loading="lazy">
                </a>
                <div class="card-body">
                    <h5 class="card-title text-center fs-4">${product.name}</h5>
                    <p class="card-text text-center fs-5">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        dryFitProductsContainer.appendChild(productCard);
    }
    ); 
});