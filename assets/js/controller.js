const controller = {
    init: () => {
        view.renderCategories();
        view.renderMenu("all", "all");
        document.getElementById("category-select").addEventListener("change", controller.filterSubcategories);
        document.getElementById("subcategory-select").addEventListener("change", controller.filterMenu);
        document.getElementById("checkout-btn").addEventListener("click", controller.checkoutCart);
        
        // Menambahkan event listener untuk tombol di keranjang
        document.addEventListener('click', (event) => {
            // Perubahan kuantitas (+ atau -)
            if (event.target.classList.contains('change-quantity')) {
                const itemId = parseInt(event.target.getAttribute('data-id'));
                const action = event.target.getAttribute('data-action');
                const item = model.cart.find(item => item.id === itemId);

                if (item) {
                    if (action === 'increase') {
                        item.quantity += 1;
                    } else if (action === 'decrease' && item.quantity > 1) {
                        item.quantity -= 1;
                    }
                    view.updateCartView();
                }
            }

            // Menghapus item
            if (event.target.classList.contains('remove-item') || event.target.closest('.remove-item')) {
                const itemId = parseInt(event.target.getAttribute('data-id') || event.target.closest('.remove-item').getAttribute('data-id'));
                model.cart = model.cart.filter(item => item.id !== itemId);
                view.updateCartView();
            }
        });
    },

    filterSubcategories: () => {
        const selectedCategory = document.getElementById("category-select").value;
        view.renderSubcategories(selectedCategory);
        view.renderMenu(selectedCategory, "all");
    },

    filterMenu: () => {
        const selectedCategory = document.getElementById("category-select").value;
        const selectedSubcategory = document.getElementById("subcategory-select").value;
        view.renderMenu(selectedCategory, selectedSubcategory);
    },

    addToCart: (itemId) => {
        const item = model.menu.find(menuItem => menuItem.id === itemId);
        if (!item) return;

        const cartItem = model.cart.find(cartItem => cartItem.id === itemId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            model.cart.push({ ...item, quantity: 1 });
        }

        view.updateCartView();
        view.showNotification(`${item.name} ditambahkan ke keranjang.`);
    },

    checkoutCart: () => {
        if (model.cart.length === 0) {
            view.showModal('emptyCartModal');
        } else {
            model.cart = []; // Kosongkan keranjang
            view.updateCartView();
            view.showModal('successModal');
        }
    }
};
