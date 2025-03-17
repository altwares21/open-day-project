document.addEventListener("DOMContentLoaded", function () {
    
    // Function to generate product cards
    function generateProductCards(containerId, category) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
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
            container.appendChild(productCard);
        });
    }

    // Fetch and display figures
    generateProductCards("figures-products", "Figures");

    // Fetch and display apparel
    const apparelCategories = ["Apparel", "Dry Fit"];
    apparelCategories.forEach(category => {
        generateProductCards(`${category.toLowerCase().replace(/\s+/g, '-')}-products`, category);
    });

    // Fetch and display accessories
    const accessoryCategories = ["Keychains", "Mugs", "Necklaces"];
    accessoryCategories.forEach(category => {
        generateProductCards(`${category.toLowerCase()}-products`, category);
    });
});