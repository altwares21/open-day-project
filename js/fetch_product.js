document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productID = parseInt(params.get("id"));

    const product = products.find(p => p.id === productID);

    if (!product) {
        document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
        return;
    }

    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-image").src = product.images[0]; // Set first image
    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").textContent = product.description;

    if (product.category === "T-Shirts") {
        document.getElementById("size-selection").style.display = "block";
    }

    document.getElementById("add-to-cart").addEventListener("click", function () {
        const quantity = parseInt(document.getElementById("quantity").value);
        const selectedSizeElement = document.querySelector('.size-option.selected');
        const size = selectedSizeElement ? selectedSizeElement.getAttribute('data-size') : null;
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.images[0]
        };
        addToCart(productToAdd);
    });
});