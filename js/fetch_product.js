document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); // Get the product ID from the URL

    // Find the product from the hardcoded array based on the ID
    const product = products.find(item => item.id === productId);

    if (product) {
        // Update product information dynamically
        document.getElementById("product-title").textContent = product.name;
        document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
        document.getElementById("product-description").textContent = product.description;

        const productImage = document.getElementById("product-image");
        productImage.src = product.images[0]; // Set the first image as the default product image

        // Clear existing thumbnails
        const imageThumbnailsContainer = document.getElementById("image-thumbnails");
        imageThumbnailsContainer.innerHTML = '';

        // Create thumbnails dynamically for the product images
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement("img");
            thumbnail.src = image;
            thumbnail.classList.add("thumbnail", "img-thumbnail");
            thumbnail.alt = `${product.name} image ${index + 1}`;

            // Add active class for the first image
            if (index === 0) {
                thumbnail.classList.add("active");
            }

            // Add thumbnail to the container
            imageThumbnailsContainer.appendChild(thumbnail);

            // Event listener for changing the main image on thumbnail click
            thumbnail.addEventListener("click", () => {
                productImage.src = image;
                document.querySelectorAll(".thumbnail").forEach(thumb => {
                    thumb.classList.remove("active");
                });
                thumbnail.classList.add("active");
            });
        });

        // Show sizes if the product is an apparel item
        if (product.category === "Apparel") {
            document.getElementById("product-sizes").style.display = "block";
            const sizeButtonsContainer = document.getElementById("size-buttons");
            const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];
            sizes.forEach(size => {
                const sizeButton = document.createElement("button");
                sizeButton.classList.add("btn", "btn-outline-primary", "size-button", "ms-2");
                sizeButton.textContent = size;
                sizeButton.addEventListener("click", () => {
                    document.querySelectorAll(".size-button").forEach(btn => {
                        btn.classList.remove("active");
                    });
                    sizeButton.classList.add("active");
                });
                sizeButtonsContainer.appendChild(sizeButton);
            });
        } else if (product.category === "Dry Fit") {
            document.getElementById("product-sizes").style.display = "block";
            const sizeButtonsContainer = document.getElementById("size-buttons");
            const sizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
            sizes.forEach(size => {
                const sizeButton = document.createElement("button");
                sizeButton.classList.add("btn", "btn-outline-primary", "size-button", "ms-2");
                sizeButton.textContent = size;
                sizeButton.addEventListener("click", () => {
                    document.querySelectorAll(".size-button").forEach(btn => {
                        btn.classList.remove("active");
                    });
                    sizeButton.classList.add("active");
                });
                sizeButtonsContainer.appendChild(sizeButton);
            });
        }

        // Handle quantity input
        const quantityDisplay = document.getElementById("quantity");
        const increaseQuantityButton = document.getElementById("increase-quantity");
        const decreaseQuantityButton = document.getElementById("decrease-quantity");

        increaseQuantityButton.addEventListener("click", () => {
            quantityDisplay.textContent = parseInt(quantityDisplay.textContent) + 1;
        });

        decreaseQuantityButton.addEventListener("click", () => {
            if (quantityDisplay.textContent > 1) {
                quantityDisplay.textContent = parseInt(quantityDisplay.textContent) - 1;
            }
        });
    } else {
        // If the product is not found, display an error
        console.error("Product not found!");
    }
});