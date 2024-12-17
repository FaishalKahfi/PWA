const view = {
    showModal: (modalId) => {
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    },
    renderCategories: () => {
        const categorySelect = document.getElementById("category-select");
        categorySelect.innerHTML = `<option value="all">Semua</option>` +
            Object.keys(model.categories).map(category => `<option value="${category}">${category}</option>`).join('');
    },
    renderSubcategories: (category) => {
        const subcategorySelect = document.getElementById("subcategory-select");
        if (category === "all") {
            subcategorySelect.innerHTML = `<option value="all">Semua</option>`;
            return;
        }
        const subcategories = model.categories[category];
        subcategorySelect.innerHTML = `<option value="all">Semua</option>` +
            Object.keys(subcategories).map(subcategory => `<option value="${subcategory}">${subcategory}</option>`).join('');
    },
    renderMenu: (category, subcategory) => {
        const menuList = document.getElementById("menu-list");
        const filteredMenu = model.menu.filter(item => 
            (category === "all" || item.category === category) &&
            (subcategory === "all" || item.subcategory === subcategory)
        );
        menuList.innerHTML = filteredMenu.map(item => `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="assets/images/${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Rp${item.price}</p>
                        <button class="btn btn-primary" onclick="controller.addToCart(${item.id})">Tambah</button>
                    </div>
                </div>
            </div>
        `).join('');
    },
    updateCartView: () => {
        const cartContainer = document.getElementById('cart-items');
        cartContainer.innerHTML = '';
    
        if (model.cart.length === 0) {
            cartContainer.innerHTML = '<tr><td colspan="5" class="text-center">Keranjang Anda kosong.</td></tr>';
            view.updateTotalPrice();
            view.updateFloatingCart();
            return;
        }
    
        model.cart.forEach(item => {
            cartContainer.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary change-quantity" data-id="${item.id}" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-primary change-quantity" data-id="${item.id}" data-action="increase">+</button>
                    </td>
                    <td>Rp${item.price}</td>
                    <td>Rp${item.price * item.quantity}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            `;
        });
    
        view.updateTotalPrice();
        view.updateFloatingCart();
    },
    updateTotalPrice: () => {
        const totalPrice = model.cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        document.getElementById("total-price").innerText = `Total: Rp${totalPrice}`;
    },
    updateFloatingCart: () => {
        const floatingCartItems = document.getElementById('floating-cart-items');
        const floatingCartCount = document.getElementById('cart-count');
        const floatingTotalPrice = document.getElementById('floating-total-price');
        
        floatingCartItems.innerHTML = '';
        
        floatingCartCount.innerText = model.cart.reduce((total, item) => total + item.quantity, 0);
        
        const totalPrice = model.cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        floatingTotalPrice.innerText = `Total: Rp${totalPrice}`;
        
        model.cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('floating-cart-item');
            cartItemElement.innerHTML = `
                <div class="floating-cart-item-details">
                    <strong>${item.name}</strong>
                    <div>Rp${item.price} x ${item.quantity}</div>
                </div>
                <div class="floating-cart-item-actions">
                    <button class="btn btn-sm btn-outline-primary change-quantity" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="mx-1">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-primary change-quantity" data-id="${item.id}" data-action="increase">+</button>
                    <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}"><i class="fa fa-trash"></i></button>
                </div>
            `;
            floatingCartItems.appendChild(cartItemElement);
        });
    },
    showNotification: (message) => {
        const notificationBox = document.getElementById("notification");
        notificationBox.innerText = message;
        notificationBox.classList.add("show");

        setTimeout(() => {
            notificationBox.classList.remove("show");
        }, 3000);
    }
};
