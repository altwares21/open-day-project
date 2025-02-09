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
});