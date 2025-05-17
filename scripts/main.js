// Sample product data
const products = [
    // Smartphones
    {
        id: 1,
        name: "Samsung Galaxy S23 Ultra",
        price: 99999,
        originalPrice: 119999,
        image: "https://via.placeholder.com/250",
        category: "Smartphones"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 1099.99,
        originalPrice: 1199.99,
        image: "https://via.placeholder.com/250",
        category: "Smartphones"
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        price: 899.99,
        originalPrice: 999.99,
        image: "https://via.placeholder.com/250",
        category: "Smartphones"
    },
    {
        id: 4,
        name: "OnePlus 12",
        price: 799.99,
        originalPrice: 899.99,
        image: "https://via.placeholder.com/250",
        category: "Smartphones"
    },

    // Laptops
    {
        id: 5,
        name: "MacBook Pro 14-inch M2",
        price: 1999.99,
        originalPrice: 2199.99,
        image: "https://via.placeholder.com/250",
        category: "Laptops"
    },
    {
        id: 6,
        name: "Dell XPS 15",
        price: 1799.99,
        originalPrice: 1999.99,
        image: "https://via.placeholder.com/250",
        category: "Laptops"
    },
    {
        id: 7,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 1599.99,
        originalPrice: 1799.99,
        image: "https://via.placeholder.com/250",
        category: "Laptops"
    },
    {
        id: 8,
        name: "ASUS ROG Zephyrus G14",
        price: 1499.99,
        originalPrice: 1699.99,
        image: "https://via.placeholder.com/250",
        category: "Laptops"
    },

    // Audio
    {
        id: 9,
        name: "Sony WH-1000XM4",
        price: 299.99,
        originalPrice: 349.99,
        image: "https://via.placeholder.com/250",
        category: "Audio"
    },
    {
        id: 10,
        name: "Apple AirPods Pro 2",
        price: 249.99,
        originalPrice: 279.99,
        image: "https://via.placeholder.com/250",
        category: "Audio"
    },
    {
        id: 11,
        name: "Bose QuietComfort 45",
        price: 279.99,
        originalPrice: 329.99,
        image: "https://via.placeholder.com/250",
        category: "Audio"
    },
    {
        id: 12,
        name: "Samsung Galaxy Buds Pro 2",
        price: 189.99,
        originalPrice: 229.99,
        image: "https://via.placeholder.com/250",
        category: "Audio"
    },

    // Wearables
    {
        id: 13,
        name: "Apple Watch Series 8",
        price: 399.99,
        originalPrice: 449.99,
        image: "https://via.placeholder.com/250",
        category: "Wearables"
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch 6",
        price: 299.99,
        originalPrice: 349.99,
        image: "https://via.placeholder.com/250",
        category: "Wearables"
    },
    {
        id: 15,
        name: "Fitbit Sense 2",
        price: 249.99,
        originalPrice: 299.99,
        image: "https://via.placeholder.com/250",
        category: "Wearables"
    },
    {
        id: 16,
        name: "Garmin Fenix 7",
        price: 699.99,
        originalPrice: 799.99,
        image: "https://via.placeholder.com/250",
        category: "Wearables"
    },

    // Gaming
    {
        id: 17,
        name: "Sony PlayStation 5",
        price: 499.99,
        originalPrice: 549.99,
        image: "https://via.placeholder.com/250",
        category: "Gaming"
    },
    {
        id: 18,
        name: "Xbox Series X",
        price: 499.99,
        originalPrice: 549.99,
        image: "https://via.placeholder.com/250",
        category: "Gaming"
    },
    {
        id: 19,
        name: "Nintendo Switch OLED",
        price: 349.99,
        originalPrice: 399.99,
        image: "https://via.placeholder.com/250",
        category: "Gaming"
    },
    {
        id: 20,
        name: "Steam Deck",
        price: 399.99,
        originalPrice: 449.99,
        image: "https://via.placeholder.com/250",
        category: "Gaming"
    },

    // TVs
    {
        id: 21,
        name: "LG C2 65-inch OLED TV",
        price: 1799.99,
        originalPrice: 2099.99,
        image: "https://via.placeholder.com/250",
        category: "TVs"
    },
    {
        id: 22,
        name: "Samsung QN90B Neo QLED 4K",
        price: 1699.99,
        originalPrice: 1999.99,
        image: "https://via.placeholder.com/250",
        category: "TVs"
    },
    {
        id: 23,
        name: "Sony A80K OLED TV",
        price: 1899.99,
        originalPrice: 2199.99,
        image: "https://via.placeholder.com/250",
        category: "TVs"
    },
    {
        id: 24,
        name: "TCL 6-Series Roku TV",
        price: 899.99,
        originalPrice: 1099.99,
        image: "https://via.placeholder.com/250",
        category: "TVs"
    },

    // Tablets
    {
        id: 25,
        name: "iPad Air 5th Generation",
        price: 599.99,
        originalPrice: 649.99,
        image: "https://via.placeholder.com/250",
        category: "Tablets"
    },
    {
        id: 26,
        name: "Samsung Galaxy Tab S9+",
        price: 899.99,
        originalPrice: 999.99,
        image: "https://via.placeholder.com/250",
        category: "Tablets"
    },
    {
        id: 27,
        name: "Microsoft Surface Pro 9",
        price: 999.99,
        originalPrice: 1199.99,
        image: "https://via.placeholder.com/250",
        category: "Tablets"
    },
    {
        id: 28,
        name: "Lenovo Tab P12 Pro",
        price: 699.99,
        originalPrice: 799.99,
        image: "https://via.placeholder.com/250",
        category: "Tablets"
    },

    // Drones
    {
        id: 29,
        name: "DJI Mini 3 Pro",
        price: 759.99,
        originalPrice: 849.99,
        image: "https://via.placeholder.com/250",
        category: "Drones"
    },
    {
        id: 30,
        name: "DJI Air 3",
        price: 1099.99,
        originalPrice: 1299.99,
        image: "https://via.placeholder.com/250",
        category: "Drones"
    },
    {
        id: 31,
        name: "Autel EVO Lite+",
        price: 1099.99,
        originalPrice: 1299.99,
        image: "https://via.placeholder.com/250",
        category: "Drones"
    },
    {
        id: 32,
        name: "DJI Mavic 3 Pro",
        price: 1599.99,
        originalPrice: 1799.99,
        image: "https://via.placeholder.com/250",
        category: "Drones"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.querySelector('.cart-count');
const SHIPPING_COST = 10.00;

// Currency conversion rate
const USD_TO_INR = 83;

// Format price in INR with commas
function formatPriceINR(price) {
    const inrPrice = price * USD_TO_INR;
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(inrPrice);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);

    // Remove notification after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Add animation to the clicked button
    const button = document.querySelector(`[onclick="addToCart(${productId})"]`);
    if (button) {
        button.classList.add('adding');
        setTimeout(() => button.classList.remove('adding'), 500);
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`Increased ${product.name} quantity in cart`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        showNotification(`${product.name} added to cart`);
    }
    
    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        // Animate the cart item before removal
        const cartItem = document.querySelector(`.cart-item[data-id="${productId}"]`);
        if (cartItem) {
            cartItem.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                cart = cart.filter(item => item.id !== productId);
                saveCart();
                renderCart();
                showNotification(`${product.name} removed from cart`, 'error');
            }, 300);
        }
    }
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        const oldQuantity = item.quantity;
        item.quantity = Math.max(1, Math.min(10, Number(newQuantity)));
        
        if (item.quantity !== oldQuantity) {
            saveCart();
            renderCart();
            showNotification(`Updated ${item.name} quantity to ${item.quantity}`);
        }
    }
}

function calculateCartTotal() {
    const subtotal = cart.reduce((total, item) => {
        const itemPrice = Number(item.price);
        const quantity = Number(item.quantity);
        return total + (itemPrice * quantity);
    }, 0);

    const shipping = subtotal > 0 ? (subtotal >= 100000 ? 0 : 50) : 0;
    const total = subtotal + shipping;

    return {
        subtotal: formatPriceINR(subtotal),
        shipping: formatPriceINR(shipping),
        total: formatPriceINR(total)
    };
}

function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    
    // Update cart count
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button onclick="window.location.href='index.html'" class="continue-shopping-btn">
                    Continue Shopping
                </button>
            </div>
        `;
    } else {
        cartContainer.innerHTML = cart.map(item => {
            // Ensure price is a number
            const itemPrice = Number(item.price);
            const quantity = Number(item.quantity);
            const total = itemPrice * quantity;

            return `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <div class="cart-item-price">${formatPriceINR(itemPrice)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, ${quantity - 1})" class="qty-btn">-</button>
                        <input type="number" value="${quantity}" min="1" max="10" 
                               onchange="updateQuantity(${item.id}, parseInt(this.value))">
                        <button onclick="updateQuantity(${item.id}, ${quantity + 1})" class="qty-btn">+</button>
                    </div>
                    <div class="cart-item-total">
                        ${formatPriceINR(total)}
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');
    }

    // Update cart summary
    const totals = calculateCartTotal();
    updateCartSummary(totals);
}

function updateCartSummary(totals) {
    const summaryElements = {
        subtotal: document.getElementById('subtotal'),
        shipping: document.getElementById('shipping'),
        total: document.getElementById('total')
    };

    if (summaryElements.subtotal) summaryElements.subtotal.textContent = totals.subtotal;
    if (summaryElements.shipping) summaryElements.shipping.textContent = totals.shipping;
    if (summaryElements.total) summaryElements.total.textContent = totals.total;

    // Update checkout button state
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Product grid functionality
function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current-price">${formatPriceINR(product.price)}</span>
                <span class="original-price">${formatPriceINR(product.originalPrice)}</span>
                <span class="discount">${discount}% OFF</span>
            </div>
            <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i>
                Add to Cart
            </button>
        </div>
    `;
}

let currentCategory = 'all';

// Initialize product grid with category filtering
function initializeProductGrid() {
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        filterProducts();
    }
}

// Update category links in sidebar
function initializeCategoryLinks() {
    const categoryLinks = document.querySelectorAll('.sidebar ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            e.target.classList.add('active');
            
            currentCategory = e.target.getAttribute('data-category') || 'all';
            filterProducts();
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-container input');
    const searchIcon = document.querySelector('.search-container i');

    // Search when user types (with debounce)
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const searchTerm = e.target.value.trim().toLowerCase();
            filterProducts(searchTerm);
        }, 300);
    });

    // Search when search icon is clicked
    searchIcon.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterProducts(searchTerm);
    });

    // Search when Enter key is pressed
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value.trim().toLowerCase();
            filterProducts(searchTerm);
        }
    });
}

// Update filter products function to include search
function filterProducts(searchTerm = '') {
    const maxPrice = parseFloat(priceRange?.value / USD_TO_INR || 2500);
    let filteredProducts = products;

    // Filter by price
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.price.toString().includes(searchTerm)
            );
        });
    }

    // Sort products by category if showing all
    if (currentCategory === 'all') {
        filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
    }

    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <p>No products found matching your search criteria.</p>
                    <button class="clear-search-btn" onclick="clearSearch()">Clear Search</button>
                </div>
            `;
        } else {
            // Group products by category if showing all
            if (currentCategory === 'all') {
                const groupedProducts = groupProductsByCategory(filteredProducts);
                productsGrid.innerHTML = generateGroupedProductsHTML(groupedProducts);
            } else {
                productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
            }
        }
    }

    // Update results count
    updateResultsCount(filteredProducts.length);
}

// Group products by category
function groupProductsByCategory(products) {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
    }, {});
}

// Generate HTML for grouped products
function generateGroupedProductsHTML(groupedProducts) {
    return Object.entries(groupedProducts).map(([category, products]) => `
        <div class="category-section">
            <h2 class="category-title">${category}</h2>
            <div class="category-products">
                ${products.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `).join('');
}

// Product details page functionality
function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
    }
}

function incrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Checkout functionality
function handleCheckout() {
    // Add your checkout logic here
    alert('Proceeding to checkout...');
}

// Clear search function
function clearSearch() {
    const searchInput = document.querySelector('.search-container input');
    if (searchInput) {
        searchInput.value = '';
        filterProducts();
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.querySelector('.results-count');
    if (resultsCount) {
        resultsCount.textContent = `${count} ${count === 1 ? 'product' : 'products'} found`;
    }
}

// Update price range display
function updatePriceRangeValue(value) {
    const priceValue = document.getElementById('priceValue');
    if (priceValue) {
        priceValue.textContent = formatPriceINR(value);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeProductGrid();
    initializeCategoryLinks();
    initializeSearch();
    updateCartCount();
    renderCart();

    // Add checkout button event listener
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Update price range display
    if (priceRange && priceValue) {
        // Convert max price to INR
        priceRange.max = 2500 * USD_TO_INR;
        priceRange.value = priceRange.max;
        
        priceRange.addEventListener('input', (e) => {
            const value = e.target.value / USD_TO_INR; // Convert back to USD for filtering
            updatePriceRangeValue(value);
            filterProducts(document.querySelector('.search-container input')?.value?.trim().toLowerCase() || '');
        });
        
        // Initialize price display
        updatePriceRangeValue(priceRange.value / USD_TO_INR);
    }
}); 