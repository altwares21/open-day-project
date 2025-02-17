const cart = [];

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.size === product.size);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += parseInt(product.quantity);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            size: product.size,
            price: product.price,
            quantity: parseInt(product.quantity),
            image: product.image // Ensure this property is correctly set
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalBottomElement = document.querySelector('#cart-details #cart-total');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    if (cartTotalElement) {
        cartTotalElement.textContent = cartTotal;
    }
    if (cartTotalBottomElement) {
        cartTotalBottomElement.textContent = cartTotal;
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function removeFromCart(productId, size) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
    renderCartItems();
}

function updateCartItemQuantity(productId, size, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (productIndex !== -1) {
        cart[productIndex].quantity = parseInt(quantity);
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartSummary();
        renderCartItems();
    }
}

function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let cartTotal = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" style="width: 150px; height: auto;" data-id="${item.id}">
            <div class="cart-item-details">
                <h3 class="cart-item-name" data-id="${item.id}">${item.name}</h3>
                <p>Price: $${item.price}</p>
                <div class="quantity-controls">
                    <button class="decrease-quantity" data-id="${item.id}" data-size="${item.size}">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}" data-size="${item.size}">+</button>
                </div>
                ${item.size ? `<p>Size: ${item.size}</p>` : ''}
                <button class="remove-item" data-id="${item.id}" data-size="${item.size}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        cartTotal += parseFloat(item.price) * item.quantity;
    });

    updateCartTotal(cartTotal);

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const size = this.getAttribute('data-size');
            removeFromCart(productId, size);
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const size = this.getAttribute('data-size');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productIndex = cart.findIndex(item => item.id === productId && item.size === size);
            if (productIndex !== -1 && cart[productIndex].quantity > 1) {
                cart[productIndex].quantity--;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCartItems();
            }
        });
    });

    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const size = this.getAttribute('data-size');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productIndex = cart.findIndex(item => item.id === productId && item.size === size);
            if (productIndex !== -1) {
                cart[productIndex].quantity++;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCartItems();
            }
        });
    });

    document.querySelectorAll('.cart-item-image, .cart-item-name').forEach(element => {
        element.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

function updateCartTotal(cartTotal) {
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    document.getElementById('cart-count').textContent = JSON.parse(localStorage.getItem('cart')).reduce((count, item) => count + item.quantity, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartSummary();
    renderCartItems();
});