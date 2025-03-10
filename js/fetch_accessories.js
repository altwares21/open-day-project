document.addEventListener("DOMContentLoaded", function () {
    const categories = ["Keychains", "Mugs", "Necklaces"];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category.toLowerCase()}-products`);
        if (!container) return;
        
        const filteredProducts = products.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "col-12 col-sm-6 col-md-6 col-lg-4 mb-4";
            productCard.innerHTML = `
                <div class="card product-card h-100">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.images[0]}" class="card-img-top img-fluid lazy" alt="${product.name}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title text-center fs-4">${product.name}</h5>
                        <p class="card-text text-center fs-5">$${product.price.toFixed(2)}</p>
                    </div>
                    </a>
                </div>
            `;
            container.appendChild(productCard);
        });
    });
});
