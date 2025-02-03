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
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-description").textContent = product.description;

    // Add image carousel if more than one image exists
    // if (product.images.length > 1) {
    //     const imageContainer = document.createElement("div");
    //     imageContainer.id = "image-carousel";

    //     product.images.forEach((imgSrc, index) => {
    //         const img = document.createElement("img");
    //         img.src = imgSrc;
    //         img.alt = `Product Image ${index + 1}`;
    //         img.className = "thumbnail";
    //         img.addEventListener("click", () => {
    //             document.getElementById("product-image").src = imgSrc;
    //         });
    //         imageContainer.appendChild(img);
    //     });

    //     document.getElementById("product-details").appendChild(imageContainer);
    // }
});