document.addEventListener('DOMContentLoaded', function() {
    renderCheckoutItems();
});

function renderCheckoutItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutItemsContainer = document.getElementById('checkout-items');
    checkoutItemsContainer.innerHTML = '';
    let checkoutTotal = 0;

    const apparelItems = {};

    cart.forEach((item) => {
        if (item.category === 'apparel') {
            if (!apparelItems[item.name]) {
                apparelItems[item.name] = [];
            }
            apparelItems[item.name].push(item);
        } else {
            const itemSubtotal = parseFloat(item.price) * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                <div class="checkout-item-details">
                    <h3 class="checkout-item-name">${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Subtotal: $${itemSubtotal.toFixed(2)}</p>
                </div>
            `;
            checkoutItemsContainer.appendChild(itemElement);
            checkoutTotal += itemSubtotal;
        }
    });

    for (const [name, items] of Object.entries(apparelItems)) {
        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        let sizesAndQuantities = '';
        let itemSubtotal = 0;

        items.forEach((item) => {
            sizesAndQuantities += `(${item.quantity}) ${item.size}, `;
            itemSubtotal += parseFloat(item.price) * item.quantity;
        });

        sizesAndQuantities = sizesAndQuantities.slice(0, -2); // Remove trailing comma and space

        itemElement.innerHTML = `
            <img src="${items[0].image}" alt="${name}" class="checkout-item-image">
            <div class="checkout-item-details">
                <h3 class="checkout-item-name">${name}</h3>
                <p>Price: $${items[0].price}</p>
                <p>Sizes and Quantities: ${sizesAndQuantities}</p>
                <p>Subtotal: $${itemSubtotal.toFixed(2)}</p>
            </div>
        `;
        checkoutItemsContainer.appendChild(itemElement);
        checkoutTotal += itemSubtotal;
    }

    document.getElementById('checkout-total').textContent = checkoutTotal.toFixed(2);
}