document.addEventListener('DOMContentLoaded', function () {
    updateCartSummary();
    renderCartItems();
});

// Show the size selection popup
function showSizePopup() {
    const popup = document.querySelector('.select-size');
    popup.style.display = 'flex';
}

// Hide the size selection popup
function hideSizePopup() {
    const popup = document.querySelector('.select-size');
    popup.style.display = 'none';
}

// Add a product to the cart
function addToCart(product) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id && (item.size === product.size || (!item.size && !product.size)));

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += parseInt(product.quantity);
    } else {
        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: parseInt(product.quantity),
            image: product.image,
            category: product.category,
            size: product.size || null
        };
        cart.push(newProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
    renderCartItems();
}

// Update the cart summary (total items and total cost)
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal;
}

// Remove a product from the cart
function removeFromCart(productId, size) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => !(item.id === productId && (item.size === size || (!item.size && !size))));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
    renderCartItems();
}

// Update quantity of a cart item
function updateCartItemQuantity(productId, size, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId && (item.size === size || (!item.size && !size)));
    if (productIndex !== -1) {
        cart[productIndex].quantity += change;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary();
        renderCartItems();
    }
}

// Render cart items dynamically
function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let cartTotal = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item col-12';
        itemElement.innerHTML = `
            <div class="card d-flex flex-row align-items-center mb-3 p-3 shadow-sm">
            <a href="product.html?id=${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image ms-3" style="width: 150px; height: auto;" data-id="${item.id}">
                </a>
                <div class="cart-item-details ms-3">
            <a href="product.html?id=${item.id}" class="text-decoration-none text-black">
                    <h3 class="cart-item-name mb-2" data-id="${item.id}">${item.name}</h3>
                    </a>
                    <p class="mb-2">Price: $${item.price}</p>
                    <div class="quantity-controls d-flex align-items-center mb-3">
                        <button class="btn btn-secondary decrease-quantity me-2" data-id="${item.id}" data-size="${item.size || ''}">-</button>
                        <span class="quantity-display mx-2">${item.quantity}</span>
                        <button class="btn btn-secondary increase-quantity ms-2" data-id="${item.id}" data-size="${item.size || ''}">+</button>
                    </div>
                    ${item.size ? `<p class="mb-2">Size: ${item.size}</p>` : ''}
                    <button class="btn btn-danger remove-item mt-2" data-id="${item.id}" data-size="${item.size || ''}">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        cartTotal += parseFloat(item.price) * item.quantity;
    });

    updateCartTotal(cartTotal);
}

// Event delegation for cart buttons
document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('increase-quantity')) {
        const productId = target.getAttribute('data-id');
        const size = target.getAttribute('data-size') || null;
        updateCartItemQuantity(productId, size, 1);
    }

    if (target.classList.contains('decrease-quantity')) {
        const productId = target.getAttribute('data-id');
        const size = target.getAttribute('data-size') || null;
        updateCartItemQuantity(productId, size, -1);
    }

    if (target.classList.contains('remove-item')) {
        const productId = target.getAttribute('data-id');
        const size = target.getAttribute('data-size') || null;
        removeFromCart(productId, size);
    }
});

// Update total price and cart count
function updateCartTotal(cartTotal) {
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    document.getElementById('cart-count').textContent = JSON.parse(localStorage.getItem('cart')).reduce((count, item) => count + item.quantity, 0);
}