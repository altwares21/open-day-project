const products = [
    // Apparel Products
    {
        id: 1,
        name: "Luffy Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Monkey D. Luffy.",
        images: [
            "products/Apparel/luffy-tee.jpg",
            "products/Apparel/luffy-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 2,
        name: "Attack on Titan Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            "products/Apparel/aot-tee.jpg",
            "products/Apparel/aot-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 3,
        name: "Goku Silhouette Tee",
        price: 35.00,
        description: "A t-shirt featuring Goku from Dragon Ball Series.",
        images: [
            "products/Apparel/goku-tee.jpg",
            "products/Apparel/goku-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 4,
        name: "Okarun Tee",
        price: 35.00,
        description: "A t-shirt featuring Okarun from Dandadan.",
        images: [
            "products/Apparel/okarun-tee.jpg",
            "products/Apparel/okarun-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 5,
        name: "Sakamoto Days Tee",
        price: 35.00,
        description: "A tee from Sakamoto Days",
        images: [
            "products/Apparel/sakamoto-tee.jpg",
            "products/Apparel/sakamoto-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 6,
        name: "Turbo Granny Tee",
        price: 35.00,
        description: "A Turbo Granny t-shirt from Dandadan.",
        images: [
            "products/Apparel/tg-tee.jpg",
            "products/Apparel/tg-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 7,
        name: "Saitama Tee",
        price: 35.00,
        description: "A Saitama t-shirt from One Punch Man.",
        images: [
            "products/Apparel/saitama-tee.jpg",
            "products/Apparel/saitama-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 8,
        name: "Neko Luffy Tee",
        price: 35.00,
        description: "A Neko Luffy t-shirt.",
        images: [
            "products/Apparel/neko-luffy-tee.jpg",
            "products/Apparel/neko-luffy-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 19,
        name: "AOT Scouting Legion Tee",
        price: 35.00,
        description: "An Attack on Titan-themed t-shirt.",
        images: [
            "products/Apparel/aot-logo-tee.jpg",
            "products/Apparel/aot-logo-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 20,
        name: "Brook Tee",
        price: 35.00,
        description: "A One Piece t-shirt featuring Brook.",
        images: [
            "products/Apparel/brook-tee.jpg",
            "products/Apparel/brook-tee2.jpg",
            "products/Apparel/brook-tee3.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 21,
        name: "Hunter x Hunter Tee",
        price: 35.00,
        description: "A Hunter x Hunter-themed t-shirt.",
        images: [
            "products/Apparel/hxh-tee.jpg",
            "products/Apparel/hxh-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 22,
        name: "My Life Story Tee",
        price: 35.00,
        description: "A Jujutsu Kaisen-themed t-shirt.",
        images: [
            "products/Apparel/myLifeStory-tee.jpg",
            "products/Apparel/myLifeStory-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 23,
        name: "Neko Ramen Tee",
        price: 35.00,
        description: "A Naruto-themed t-shirt.",
        images: [
            "products/Apparel/neko-ramen-tee.jpg",
            "products/Apparel/neko-ramen-tee2.jpg"
        ],
        category: "Apparel"
    },
    {
        id: 24,
        name: "Pikachu Tee",
        price: 35.00,
        description: "A Pikachu-themed t-shirt.",
        images: [
            "products/Apparel/pikachu-tee.jpg",
            "products/Apparel/pikachu-tee2.jpg"
        ],
        category: "Apparel"
    },

    //Dry Fit Tees
    {
        id: 25,
        name: "Crash Bandicoot DryFit Tee",
        price: 50.00,
        description: "A Crash Bandicoot-themed dry fit t-shirt.",
        images: [
            "products/DryFit/crash-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 26,
        name: "Death Notre DryFit Tee",
        price: 50.00,
        description: "A Death Note-themed dry fit t-shirt.",
        images: [
            "products/DryFit/death-note-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 27,
        name: "Eren Yeager DryFit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/eren-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 28,
        name: "Goku DryFit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            "products/DryFit/goku-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 29,
        name: "Hellsing DryFit Tee",
        price: 50.00,
        description: "A Hellsing-themed dry fit t-shirt.",
        images: [
            "products/DryFit/hellsing-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 30,
        name: "Ikkaku DryFit Tee",
        price: 50.00,
        description: "A Bleach-themed dry fit t-shirt.",
        images: [
            "products/DryFit/ikkaku-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 31,
        name: "Jinx DryFit Tee",
        price: 50.00,
        description: "A Jinx-themed dry fit t-shirt.",
        images: [
            "products/DryFit/jinx-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 32,
        name: "Alternate Jinx DryFit Tee",
        price: 50.00,
        description: "An alternate Jinx-themed dry fit t-shirt.",
        images: [
            "products/DryFit/jinx-dryfit2.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 33,
        name: "Kratos DryFit Tee",
        price: 50.00,
        description: "A God of War-themed dry fit t-shirt.",
        images: [
            "products/DryFit/kratos-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 34,
        name: "Levi DryFit Tee",
        price: 50.00,
        description: "An Attack on Titan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/levi-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 35,
        name: "Mitsuri DryFit Tee",
        price: 50.00,
        description: "A Demon Slayer-themed dry fit t-shirt.",
        images: [
            "products/DryFit/mitsuri-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 36,
        name: "Momo DryFit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/momo-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 37,
        name: "naruto DryFit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/naruto-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 38,
        name: "Natsu DryFit Tee",
        price: 50.00,
        description: "A Fairy Tail-themed dry fit t-shirt.",
        images: [
            "products/DryFit/natsu-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 39,
        name: "Nezuku DryFit Tee",
        price: 50.00,
        description: "A Demon Slayer dry fit t-shirt.",
        images: [
            "products/DryFit/nezuko-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 40,
        name: "Okarun DryFit Tee",
        price: 50.00,
        description: "A Dandadan-themed dry fit t-shirt.",
        images: [
            "products/DryFit/okarun-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 41,
        name: "One Piece DryFit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/one-piece-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 42,
        name: "Alternate One Piece DryFit Tee",
        price: 50.00,
        description: "An alternate One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/one-piece-dryfit2.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 43,
        name: "Rias Gremory DryFit Tee",
        price: 50.00,
        description: "A High School DxD-themed dry fit t-shirt.",
        images: [
            "products/DryFit/rias-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 44,
        name: "Sasuke DryFit Tee",
        price: 50.00,
        description: "A Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/sasuke-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 45,
        name: "Alternate Sasuke DryFit Tee",
        price: 50.00,
        description: "An alternate Naruto-themed dry fit t-shirt.",
        images: [
            "products/DryFit/sasuke-dryfit2.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 46,
        name: "Vegate DryFit Tee",
        price: 50.00,
        description: "A Dragon Ball-themed dry fit t-shirt.",
        images: [
            "products/DryFit/vegeta-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 47,
        name: "Yujiro Hanma DryFit Tee",
        price: 50.00,
        description: "A Baki-themed dry fit t-shirt.",
        images: [
            "products/DryFit/yujiro-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    {
        id: 48,
        name: "Zoro DryFit Tee",
        price: 50.00,
        description: "A One Piece-themed dry fit t-shirt.",
        images: [
            "products/DryFit/zoro-dryfit.jpg"
        ],
        category: "Dry Fit"
    },
    
    // Figures Products
    {
        id: 9,
        name: "Luffy Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Luffy from One Piece.",
        images: [
            "products/Figures/luffy-funko.jpg",
            "products/Figures/luffy-funko2.jpg",
            "products/Figures/luffy-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 10,
        name: "Aipom Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Aipom from Pokémon.",
        images: [
            "products/Figures/aipom-funko.jpg",
            "products/Figures/aipom-funko2.jpg",
            "products/Figures/aipom-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 11,
        name: "Gambit Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop of Gambit from X-Men.",
        images: [
            "products/Figures/gambit-funko.jpg",
            "products/Figures/gambit-funko2.jpg",
            "products/Figures/gambit-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 12,
        name: "Goku Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop of Goku.",
        images: [
            "products/Figures/goku-funko.jpg",
            "products/Figures/goku-funko2.jpg",
            "products/Figures/goku-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 13,
        name: "Meliodas Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop figure of Meliodas from Seven Deadly Sins.",
        images: [
            "products/Figures/melodias-funko.jpg",
            "products/Figures/melodias-funko2.jpg",
            "products/Figures/melodias-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 14,
        name: "Mina Funko Pop",
        price: 25.00,
        description: "A Funko Pop figure of Mina from My Hero Academia.",
        images: [
            "products/Figures/mina-funko.jpg",
            "products/Figures/mina-funko2.jpg",
            "products/Figures/mina-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 15,
        name: "Tengen Uzui Funko Pop",
        price: 65.00, // Updated price
        description: "A Funko Pop figure of Tengen Uzui from Demon Slayer.",
        images: [
            "products/Figures/tengen-funko.jpg",
            "products/Figures/tengen-funko2.jpg",
            "products/Figures/tengen-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 16,
        name: "Venom Funko Pop",
        price: 55.00, // Updated price
        description: "A Funko Pop figure of Venom.",
        images: [
            "products/Figures/venom-funko.jpg",
            "products/Figures/venom-funko2.jpg",
            "products/Figures/venom-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 17,
        name: "Wonder Woman Funko Pop",
        price: 35.00, // Updated price
        description: "A Funko Pop figure of Wonder Woman.",
        images: [
            "products/Figures/ww-funko.jpg",
            "products/Figures/ww-funko2.jpg",
            "products/Figures/ww-funko3.jpg"
        ],
        category: "Figures"
    },
    {
        id: 18,
        name: "Boruto Funko Pop",
        price: 50.00, // Updated price
        description: "A Funko Pop figure of Boruto.",
        images: [
            "products/Figures/boruto-funko.jpg",
            "products/Figures/boruto-funko2.jpg",
            "products/Figures/boruto-funko3.jpg"
        ],
        category: "Figures"
    }
];

document.addEventListener("DOMContentLoaded", function () {
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

        // Create thumbnails dynamically for the product images
        const imageThumbnailsContainer = document.getElementById("image-thumbnails");
        product.images.forEach((image, index) => {
            const thumbnail = document.createElement("img");
            thumbnail.src = image;
            thumbnail.classList.add("thumbnail");
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
    } else {
        // If the product is not found, display an error
        console.error("Product not found!");
    }
});
