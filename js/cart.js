const cart = [];

document.addEventListener('DOMContentLoaded', function() {
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
    // If product is Apparel or Dry Fit and no size is selected, show the size popup
    if ((product.category === 'Apparel' || product.category === 'Dry Fit') && !product.size) {
        showSizePopup();
        return;
    }
    
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
            category: product.category
        };
        if (product.size) {
            newProduct.size = product.size;
        }
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
    cart = cart.filter(item => !(item.id === productId && (!item.size || item.size === size)));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
    renderCartItems();
}

// Update quantity of a cart item
function updateCartItemQuantity(productId, size, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId && item.size === size);
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
        itemElement.className = 'cart-item col-12 col-md-6 col-lg-4';
        itemElement.innerHTML = `
            <div class="card">
                <a href="product.html?id=${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="card-img-top cart-item-image" data-id="${item.id}">
                </a>
                <div class="card-body">
                    <a href="product.html?id=${item.id}">
                        <h5 class="card-title cart-item-name" data-id="${item.id}">${item.name}</h5>
                    </a>
                    <p class="card-text">Price: $${item.price}</p>
                    <div class="quantity-controls d-flex justify-content-between align-items-center">
                        <button class="decrease-quantity btn btn-outline-secondary" data-id="${item.id}" data-size="${item.size}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="increase-quantity btn btn-outline-secondary" data-id="${item.id}" data-size="${item.size}">+</button>
                    </div>
                    ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                    <button class="remove-item btn btn-outline-danger mt-2" data-id="${item.id}" data-size="${item.size}">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        cartTotal += parseFloat(item.price) * item.quantity;
    });

    updateCartTotal(cartTotal);
}

// Event delegation for cart buttons
document.addEventListener('click', function(event) {
    const target = event.target;

    // Increase quantity button
    if (target.classList.contains('increase-quantity')) {
        const productId = parseInt(target.getAttribute('data-id'));
        const size = target.getAttribute('data-size');
        updateCartItemQuantity(productId, size, 1);
    }

    // Decrease quantity button
    if (target.classList.contains('decrease-quantity')) {
        const productId = parseInt(target.getAttribute('data-id'));
        const size = target.getAttribute('data-size');
        updateCartItemQuantity(productId, size, -1);
    }

    // Remove item button
    if (target.classList.contains('remove-item')) {
        const productId = parseInt(target.getAttribute('data-id'));
        const size = target.getAttribute('data-size');
        removeFromCart(productId, size);
    }
});

// Update total price and cart count
function updateCartTotal(cartTotal) {
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    document.getElementById('cart-count').textContent = JSON.parse(localStorage.getItem('cart')).reduce((count, item) => count + item.quantity, 0);
}