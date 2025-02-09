const products = [
    // Apparel Products
    {
        id: 1,
        name: "Luffy Tee",
        price: 35.00,
        description: "A stylish One Piece t-shirt featuring Monkey D. Luffy.",
        images: [
            "products/Apparel/luffy-tee.jpg",
            "products/Apparel/luffy-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 2,
        name: "Attack on Titan Tee",
        price: 35.00,
        description: "A high-quality Attack on Titan-themed t-shirt.",
        images: [
            "products/Apparel/aot-tee.jpg",
            "products/Apparel/aot-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 3,
        name: "Goku Tee",
        price: 35.00,
        description: "A comfortable t-shirt featuring Goku from Dragon Ball.",
        images: [
            "products/Apparel/goku-tee.jpg",
            "products/Apparel/goku-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 4,
        name: "Okarun Tee",
        price: 35.00,
        description: "A stylish t-shirt featuring Okarun from the anime Sakamoto.",
        images: [
            "products/Apparel/okarun-tee.jpg",
            "products/Apparel/okarun-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 5,
        name: "Sakamoto Tee",
        price: 35.00,
        description: "A fashionable tee from the anime Sakamoto Desu Ga?",
        images: [
            "products/Apparel/sakamoto-tee.jpg",
            "products/Apparel/sakamoto-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 6,
        name: "Turbo Granny Tee",
        price: 35.00,
        description: "A high-quality Turbo Granny t-shirt.",
        images: [
            "products/Apparel/tg-tee.jpg",
            "products/Apparel/tg-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 7,
        name: "Saitama Tee",
        price: 35.00,
        description: "A high-quality Saitama t-shirt.",
        images: [
            "products/Apparel/saitama-tee.jpg",
            "products/Apparel/saitama-tee2.jpg"
        ],
        category: "T-Shirts"
    },
    {
        id: 8,
        name: "Neko Luffy Tee",
        price: 35.00,
        description: "A high-quality Neko Luffy t-shirt.",
        images: [
            "products/Apparel/neko-luffy-tee.jpg",
            "products/Apparel/neko-luffy-tee2.jpg"
        ],
        category: "T-Shirts"
    },

    // Figures Products
{
    id: 9,
    name: "Luffy Funko Pop",
    price: 25.00,
    description: "A limited edition Funko Pop of Luffy from One Piece.",
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
    price: 25.00,
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
    price: 25.00,
    description: "A collectible Funko Pop of Gambit from X-Men.",
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
    price: 25.00,
    description: "A limited edition Funko Pop of Goku.",
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
    price: 25.00,
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
    price: 25.00,
    description: "A Funko Pop figure of Tengen Uzui.",
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
    price: 25.00,
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
    price: 25.00,
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
    price: 25.00,
    description: "A Funko Pop figure of Boruto.",
    images: [
        "products/Figures/boruto-funko.jpg",
        "products/Figures/boruto-funko2.jpg",
        "products/Figures/boruto-funko3.jpg"
    ],
    category: "Figures"
}
];

// Extract product ID from the URL query string
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
